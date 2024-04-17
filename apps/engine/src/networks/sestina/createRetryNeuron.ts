import { createSequence } from "./createSequence.js";
import { Network } from "../../primitives/memory/Network.js";
import { Neuron } from "../../primitives/memory/Neuron.js";
import { v4 as uuid } from "uuid";
import { openai } from "../../lib/openai/openai.js";
import { Signal } from "../../primitives/memory/Signal.js";
import { parseSestina } from "./parser/parseSestina.js";

const isFeedback = ({ signal }: { signal: Signal }) => {
  return signal.text !== `You generated a perfect sestina!`;
};

export const createRetryNeuron = async ({ network }: { network: Network }) => {
  const dendrites = [
    await createSequence({
      network,
      address: { address: "synthetic sestina dendrite" },
    }),
  ];

  const axon = await createSequence({
    network,
    address: { address: "retry sestina axon" },
  });

  const feedback = await createSequence({
    network,
    address: { address: "synthetic sestina feedback" },
  });

  const attached: Neuron["attached"] = {
    dendrites: [],
    axon: [],
    feedback: null,
  };

  const attach: Neuron["attach"] = {
    dendrite: async ({ address, sequence }) => {
      const foundAttached = attached.dendrites.find(
        (a) => a.sequence.address.address === sequence.address.address,
      );

      if (foundAttached !== undefined) {
        throw new Error(
          `Sequence ${sequence.address.address} already attached`,
        );
      }

      const dendrite = dendrites.find(
        (d) => d.address.address === address.address,
      );

      if (dendrite === undefined) {
        throw new Error(`Dendrite ${address.address} not found`);
      }

      const detach = await dendrite.attach({ sequence });

      attached.dendrites.push({ address, sequence });

      return {
        detach: async () => {
          const index = attached.dendrites.findIndex(
            (a) => a.sequence.address.address === sequence.address.address,
          );

          if (index === -1) {
            throw new Error(
              `Sequence ${sequence.address.address} not attached`,
            );
          }

          await detach.detach();

          attached.dendrites.splice(index, 1);
        },
      };
    },

    axon: async ({ sequence }) => {
      const found = attached.axon.find(
        (a) => a.address.address === sequence.address.address,
      );

      if (found !== undefined) {
        throw new Error(
          `Sequence ${sequence.address.address} already attached`,
        );
      }

      const detach = await axon.attach({ sequence });

      attached.axon.push(sequence);

      return {
        detach: async () => {
          const index = attached.axon.findIndex(
            (a) => a.address.address === sequence.address.address,
          );

          if (index === -1) {
            throw new Error(
              `Sequence ${sequence.address.address} not attached`,
            );
          }

          await detach.detach();

          attached.axon.splice(index, 1);
        },
      };
    },

    feedback: async ({ sequence }) => {
      if (attached.feedback !== null) {
        throw new Error(`Feedback sequence already attached`);
      }

      attached.feedback = sequence;

      const detach = await feedback.attach({ sequence });

      return {
        detach: async () => {
          if (attached.feedback?.address.address !== sequence.address.address) {
            throw new Error(`Feedback sequence not attached`);
          }

          await detach.detach();

          attached.feedback = null;
        },
      };
    },
  };

  const bound: Neuron["bound"] = {
    axons: [],
    dendrite: null,
    feedback: null,
  };

  const bind: Neuron["bind"] = {
    dendrites: async ({ axons }) => {
      if (bound.axons.length !== 0) {
        throw new Error(`Dendrites already bound`);
      }

      if (axons.length !== dendrites.length) {
        throw new Error(
          `Cannot bind ${axons.length} axons to ${dendrites.length} dendrites`,
        );
      }

      const detaches: Array<{ detach: () => Promise<void> }> = [];

      for (let i = 0; i < axons.length; i++) {
        const axon = axons[i];
        const dendrite = dendrites[i];

        detaches.push(await axon.attach({ sequence: dendrite }));
      }

      bound.axons = axons;

      return {
        unbind: async () => {
          if (bound.axons.length === 0) {
            throw new Error(`Dendrites not bound`);
          }

          await Promise.all(detaches.map((detach) => detach.detach()));

          bound.axons = [];
        },
      };
    },

    axon: async ({ dendrite }) => {
      if (bound.dendrite !== null) {
        throw new Error(`Axon already bound`);
      }

      const detach = await axon.attach({ sequence: dendrite });

      bound.dendrite = dendrite;

      return {
        unbind: async () => {
          if (bound.dendrite?.address.address !== dendrite.address.address) {
            throw new Error(`Axon not bound`);
          }

          await detach.detach();

          bound.dendrite = null;
        },
      };
    },

    feedback: async ({ axon }) => {
      if (bound.feedback !== null) {
        throw new Error(`Feedback already bound`);
      }
      const detach = await axon.attach({ sequence: feedback });

      bound.feedback = axon;

      return {
        unbind: async () => {
          if (bound.feedback === null) {
            throw new Error(`Feedback not bound`);
          }

          await detach.detach();

          bound.feedback = null;
        },
      };
    },
  };

  const activate = async () => {
    console.log("ACTIVATING SYNTHETIC SESTINA NEURON");

    const input = dendrites
      .map((dendrite) => dendrite.signals.map((s) => s.text))
      .flat()
      .join("\n");

    const system = `
      You are a sestina generator.

      Here is a list of feedback you've received about your previous sestinas:

      ${feedback.signals.map((signal) => signal.text).join("\n\n\n")}
    `.trim();

    console.log("SYSTEM PROMPT", system);

    let tries = 0;

    while (tries < 100) {
      console.log(`TRY ${tries}`);

      tries += 1;

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: system,
          },
          {
            role: "user",
            content: input,
          },
        ],
      });

      const sestina = response.choices[0].message.content;

      if (typeof sestina === "string") {
        const parsed = parseSestina({ text: sestina });

        if (parsed.ok) {
          return {
            id: uuid(),
            sequence: axon.address,
            stimuli: dendrites.map((dendrite) => dendrite.signals).flat(),
            text: sestina,
          };
        }
      }
    }

    throw new Error(`Failed to generate a sestina`);
  };

  const activation = {
    prevTotal: 0,
    feedback: 0,
  };

  setInterval(async () => {
    const total = dendrites.reduce((acc, dendrite) => {
      return acc + dendrite.signals.length;
    }, 0);

    if (activation.prevTotal === total) {
      return;
    } else {
      activation.prevTotal = total;

      const signal = await activate();

      axon.append({ signal });
    }
  }, 250);

  setInterval(async () => {
    const fb = feedback.signals.filter((signal) => isFeedback({ signal }));

    if (activation.feedback === fb.length) {
      return;
    } else {
      activation.feedback = fb.length;

      const signal = await activate();

      axon.append({ signal });
    }
  }, 250);

  const neuron = {
    description: "Generate a sestina neuron",
    dendrites,
    axon,
    feedback,
    bound,
    bind,
    activate,
    attached,
    attach,
  };

  const found = network.neurons.find(
    (n) => n.axon.address.address === axon.address.address,
  );

  if (found === undefined) {
    await network.attach.neuron({ neuron });
  }

  return neuron;
};

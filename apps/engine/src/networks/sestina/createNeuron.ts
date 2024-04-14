import { createSequence } from "./createSequence.js";
import { Network } from "../../primitives/memory/Network.js";
import { Neuron } from "../../primitives/memory/Neuron.js";
import { v4 as uuid } from "uuid";
import { openai } from "../../lib/openai/openai.js";

export const createNeuron = async ({ network }: { network: Network }) => {
  const dendrites = [
    await createSequence({ network, address: { address: "haiku dendrite" } }),
  ];

  const axon = await createSequence({
    network,
    address: { address: "Generated haiku axon" },
  });

  const feedback = await createSequence({
    network,
    address: { address: "haiku feedback" },
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
  };

  const activate = async () => {
    const input = dendrites
      .map((dendrite) => dendrite.signals.map((s) => s.text))
      .flat()
      .join("\n");

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a sestina generator",
        },
        {
          role: "user",
          content: input,
        },
      ],
    });

    const haiku = response.choices[0].message.content;

    if (typeof haiku !== "string") {
      throw new Error(`Invalid haiku response: ${haiku}`);
    }

    return {
      id: uuid(),
      sequence: axon.address,
      stimuli: dendrites.map((dendrite) => dendrite.signals).flat(),
      text: haiku,
    };
  };

  const activation = {
    prevTotal: 0,
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

  const neuron = {
    description: "Generate a haiku neuron",
    dendrites,
    axon,
    feedback,
    bound,
    bind,
    activate,
    attached,
    attach,
  };

  await network.attach.neuron({ neuron });

  return neuron;
};

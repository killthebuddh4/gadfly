import { createNetwork } from "./createNetwork.js";
import { createIngress } from "./createIngress.js";
import { createEgress } from "./createEgress.js";
import { createNeuron } from "./createNeuron.js";

export const run = async ({ directions }: { directions: string }) => {
  const network = await createNetwork();
  const ingress = await createIngress({ network });
  const egress = await createEgress({ network });
  const neuron = await createNeuron({ network });

  neuron.bind.dendrites({ axons: [ingress] });
  neuron.bind.axon({ dendrite: egress });

  const activation = {
    total: 0,
  };

  setInterval(async () => {
    const output = await egress.read();

    if (output.length === activation.total) {
      return;
    } else {
      activation.total = output.length;
    }

    console.log(output[output.length - 1]?.text);
  }, 300);

  ingress.append({
    signal: {
      id: "1",
      sequence: ingress.address,
      stimuli: [],
      text: directions,
    },
  });
};

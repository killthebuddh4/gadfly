import { Neuron } from "../../primitives/memory/Neuron.js";
import { Network } from "../../primitives/memory/Network.js";
import { Sequence } from "../../primitives/memory/Sequence.js";

export const createNetwork = async (): Promise<Network> => {
  const name = "sestina";
  const sequences: Sequence[] = [];
  const neurons: Neuron[] = [];

  const attach = {
    sequence: async ({ sequence }: { sequence: Sequence }) => {
      const found = sequences.find(
        (a) => a.address.address === sequence.address.address,
      );

      if (found !== undefined) {
        throw new Error(
          `Sequence ${sequence.address.address} already attached`,
        );
      }

      console.log(
        `Attaching sequence ${sequence.address.address} to network ${name}`,
      );

      sequences.push(sequence);

      return {
        detach: async () => {
          const index = sequences.findIndex(
            (s) => s.address.address === sequence.address.address,
          );

          if (index === -1) {
            throw new Error(
              `Sequence ${sequence.address.address} not attached`,
            );
          }

          sequences.splice(index, 1);
        },
      };
    },

    neuron: async ({ neuron }: { neuron: Neuron }) => {
      console.log(neurons.map((n) => n.axon.address.address));

      const found = neurons.find(
        (n) => n.axon.address.address === neuron.axon.address.address,
      );

      if (found !== undefined) {
        throw new Error(
          `Neuron ${neuron.axon.address.address} already attached`,
        );
      }

      console.log(
        `Attaching neuron ${neuron.axon.address.address} to network ${name}`,
      );

      neurons.push(neuron);

      return {
        detach: async () => {
          const index = neurons.findIndex(
            (n) => n.axon.address.address === neuron.axon.address.address,
          );

          if (index === -1) {
            throw new Error(
              `Neuron ${neuron.axon.address.address} not attached`,
            );
          }

          neurons.splice(index, 1);
        },
      };
    },
  };

  return {
    name,
    sequences,
    neurons,
    attach,
  };
};

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
        (sequence) => sequence.address === sequence.address,
      );

      if (found !== undefined) {
        throw new Error(
          `Sequence ${sequence.address.address} already attached`,
        );
      }

      sequences.push(sequence);

      return {
        detach: async () => {
          const index = sequences.findIndex(
            (sequence) => sequence.address === sequence.address,
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
      const found = neurons.find((neuron) => neuron.address === neuron.address);

      if (found !== undefined) {
        throw new Error(`Neuron ${neuron.address.address} already attached`);
      }

      neurons.push(neuron);

      return {
        detach: async () => {
          const index = neurons.findIndex(
            (neuron) => neuron.address === neuron.address,
          );

          if (index === -1) {
            throw new Error(`Neuron ${neuron.address.address} not attached`);
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

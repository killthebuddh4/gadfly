import { Neuron } from "../../primitives/substrate/Neuron.js";
import { Network } from "../../primitives/substrate/Network.js";
import { Sequence } from "../../primitives/substrate/Sequence.js";

export const createNetwork = async (): Promise<Network> => {
  const name = "sestina";
  const sequences: Sequence[] = [];
  const neurons: Neuron[] = [];

  return {
    name,
    sequences,
    neurons,
  };
};

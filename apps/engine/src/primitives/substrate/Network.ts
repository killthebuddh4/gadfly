import { Neuron } from "./Neuron.js";
import { Sequence } from "./Sequence.js";

export type Network = {
  name: string;
  sequences: Sequence[];
  neurons: Neuron[];
};

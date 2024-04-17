import { Neuron } from "./neuron/Neuron.js";
import { Sequence } from "./Sequence.js";

export type Network = {
  name: string;
  sequences: Sequence[];
  neurons: Neuron[];

  attach: {
    sequence: (args: { sequence: Sequence }) => Promise<{
      detach: () => Promise<void>;
    }>;

    neuron: (args: { neuron: Neuron }) => Promise<{
      detach: () => Promise<void>;
    }>;
  };
};

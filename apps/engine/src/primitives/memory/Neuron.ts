import { Sequence } from "./Sequence.js";

export type Neuron = {
  description: string;

  dendrites: Sequence[];
  axon: Sequence;

  attach: {
    dendrite: (args: { sequence: Sequence }) => Promise<{
      detach: () => Promise<void>;
    }>;

    axon: (args: { sequence: Sequence }) => Promise<{
      detach: () => Promise<void>;
    }>;
  };
};

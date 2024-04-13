import { Address } from "./Address.js";
import { Sequence } from "./Sequence.js";
import { Signal } from "./Signal.js";

export type Neuron = {
  description: string;

  dendrites: Sequence[];
  axon: Sequence;
  feedback: Sequence;

  attached: {
    dendrites: Array<{ address: Address; sequence: Sequence }>;
    axon: Sequence;
    feedback: Sequence;
  };

  activate: () => Promise<Signal>;

  attach: {
    dendrite: (args: { address: Address; sequence: Sequence }) => Promise<{
      detach: () => Promise<void>;
    }>;

    axon: (args: { sequence: Sequence }) => Promise<{
      detach: () => Promise<void>;
    }>;

    feedback: (args: { sequence: Sequence }) => Promise<{
      detach: () => Promise<void>;
    }>;
  };
};

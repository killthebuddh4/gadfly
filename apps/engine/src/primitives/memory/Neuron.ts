import { Address } from "./Address.js";
import { Sequence } from "./Sequence.js";
import { Signal } from "./Signal.js";

export type Neuron = {
  description: string;

  dendrites: Sequence[];
  axon: Sequence;
  feedback: Sequence | null;

  bound: {
    axons: Sequence[];
    dendrite: Sequence | null;
  };

  bind: {
    dendrites: (args: { axons: Sequence[] }) => Promise<{
      unbind: () => Promise<void>;
    }>;
    axon: (args: { dendrite: Sequence }) => Promise<{
      unbind: () => Promise<void>;
    }>;
  };

  activate: () => Promise<Signal>;

  attached: {
    dendrites: Array<{ address: Address; sequence: Sequence }>;
    axon: Sequence[];
    feedback: Sequence | null;
  };

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

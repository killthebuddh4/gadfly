import { Address } from "./Address.js";
import { Handler } from "./Handler.js";
import { Sequence } from "./Sequence.js";

export type Neuron = {
  address: Address;

  dendrites: Sequence[];
  axon: Sequence;

  attach: {
    dendrite: (args: { address: Address; handler: Handler }) => Promise<{
      detach: () => Promise<void>;
    }>;

    axon: (args: { handler: Handler }) => Promise<{
      detach: () => Promise<void>;
    }>;
  };
};

import { Address } from "./Address.js";
import { Signal } from "./Signal.js";

export type Sequence = {
  address: Address;
  signals: Signal[];

  read: () => Promise<Signal[]>;
  append: (args: { signal: Signal }) => Promise<void>;

  attached: Sequence[];

  attach: (args: { sequence: Sequence }) => Promise<{
    detach: () => Promise<void>;
  }>;
};

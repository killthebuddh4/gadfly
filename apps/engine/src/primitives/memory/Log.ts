import { Address } from "./Address.js";
import { Signal } from "./Signal.js";

export type Log = {
  address: Address;
  signals: Signal[];

  read: () => Promise<Signal[]>;
  append: (args: { signal: Signal }) => Promise<void>;

  attached: Log[];

  attach: (args: { log: Log }) => Promise<{
    detach: () => Promise<void>;
  }>;
};

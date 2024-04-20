import { Signal } from "./Signal.js";

export type Log = {
  id: () => Promise<string>;
  description: () => Promise<string>;

  read: () => Promise<Signal[]>;
  append: (args: { signal: Signal }) => Promise<void>;

  attached: () => Promise<Log[]>;

  attach: (args: { log: Log }) => Promise<{
    detach: () => Promise<void>;
  }>;
};

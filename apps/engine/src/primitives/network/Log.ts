import { Signal } from "./Signal.js";

export type Log = {
  id: string;
  description: string;
  parent: Log | null;
  children: Log[];
  signals: Signal[];

  read: () => Promise<Signal[]>;
  append: (args: { signal: Signal }) => Promise<void>;

  attached: Log[];

  attach: (args: { log: Log }) => Promise<{
    detach: () => Promise<void>;
  }>;
};

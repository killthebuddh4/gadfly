import { Signal } from "../network/Signal.js";

export type Value = {
  id: () => Promise<string>;
  read: () => Promise<Signal[]>;
};

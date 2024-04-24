import { Signal } from "./Signal.js";

export type Value = {
  id: () => Promise<string>;
  read: () => Promise<Signal[]>;
};

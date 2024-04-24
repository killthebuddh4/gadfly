import { Signal } from "./Signal.js";
import { Value } from "./Value.js";
import { Operation } from "./Operation.js";

export type Type = {
  id: () => Promise<string>;
  name: () => Promise<Signal>;

  history: () => Promise<Operation[]>;
  read: () => Promise<Value>;
  write: (args: { value: Value }) => Promise<void>;
  widen: (args: { signal: Signal }) => Promise<void>;
  narrow: (args: { signal: Signal }) => Promise<void>;
  feedback: (args: { signal: Signal }) => Promise<void>;
};

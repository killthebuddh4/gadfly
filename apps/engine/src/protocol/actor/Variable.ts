import { Signal } from "./Signal.js";
import { Value } from "./Value.js";
import { Operation } from "./Operation.js";
import { Type } from "./Type.js";
import { Actor } from "./Actor.js";

export type Variable = {
  id: () => Promise<string>;
  name: () => Promise<Signal>;

  type: () => Promise<Type>;

  history: () => Promise<Operation[]>;
  read: () => Promise<Value>;
  write: (args: { value: Value }) => Promise<void>;
  widen: (args: { signal: Signal }) => Promise<void>;
  narrow: (args: { signal: Signal }) => Promise<void>;
  feedback: (args: { signal: Signal }) => Promise<void>;

  subscribers: () => Promise<Actor[]>;
  subscribe: (args: { actor: Actor }) => Promise<{
    unsubscribe: () => Promise<void>;
  }>;
};

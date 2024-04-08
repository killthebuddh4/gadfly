import { Actor } from "../actor/Actor.js";
import { Sequence } from "../sequence/Sequence.js";
import { Signal } from "../signal/Signal.js";

export type Process = {
  actor: Actor;
  history: Sequence[];
  generate: () => Promise<Sequence>;
  execute: (args: { signal: Signal }) => Promise<Signal>;
};

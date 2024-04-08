import { Actor } from "../actor/Actor.js";
import { Signal } from "../signal/Signal.js";

export type Sequence = {
  actor: Actor;
  history: Signal[];
  generate: () => Promise<Signal>;
};

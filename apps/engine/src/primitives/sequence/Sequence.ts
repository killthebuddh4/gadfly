import { Actor } from "../actor/Actor.js";
import { Signal } from "../signal/Signal.js";
import { Generation } from "../generation/Generation.js";

export type Sequence = {
  actor: Actor;
  history: Generation<Signal>;
  generate: () => Promise<Signal>;
};

import { Actor } from "../actor/Actor.js";
import { Sequence } from "../sequence/Sequence.js";
import { Generation } from "../generation/Generation.js";

export type Process = {
  actor: Actor;
  history: Generation<Sequence>;
  generate: () => Promise<Sequence>;
};

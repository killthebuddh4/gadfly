import { Actor } from "../actor/Actor.js";
import { Sequence } from "../sequence/Sequence.js";

export type Process = {
  actor: Actor;
  history: Sequence[];
  generate: () => Promise<Sequence>;
};

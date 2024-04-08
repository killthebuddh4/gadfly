import { Actor } from "../actor/Actor.js";

export type Expression = {
  actor: Actor;
  parent: Expression | null;
  children: Expression[];
  expand: () => Promise<void>;
  evaluate: () => Promise<void>;
  reduce: () => Promise<void>;
  return: () => Promise<void>;
};

import { Supervisor } from "../supervisor/Supervisor.js";
import { Actor } from "../actor/Actor.js";

export type Expression = {
  supervisor: Supervisor;
  expand: () => Promise<Actor>;
  evaluate: () => Promise<Actor>;
  reduce: () => Promise<Actor>;
  return: () => Promise<Actor>;
};

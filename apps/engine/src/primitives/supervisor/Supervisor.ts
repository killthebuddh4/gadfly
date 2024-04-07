import { Expression } from "../expression/Expression.js";
import { Actor } from "../actor/Actor.js";

export type Supervisor = {
  actor: Actor;
  expression: Expression;
};

import { Actor } from "../actor/Actor.js";
import { Expression } from "../expression/Expression.js";

export type Literal = {
  actor: Actor;
  expression: Expression;
};

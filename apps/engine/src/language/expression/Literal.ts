import { Expression } from "./Expression.js";

export type Literal = {
  type: "literal";
  expression: () => Promise<Expression>;
};

import { Expression } from "./Expression.js";

export type Literal = {
  type: "literal";
  unwrap: () => Promise<Expression>;
};

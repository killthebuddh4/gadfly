import { Expression } from "./Ast.js";

export type Literal = {
  type: "literal";
  expression: () => Promise<Expression>;
};

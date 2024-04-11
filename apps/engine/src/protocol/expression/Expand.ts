import { Expression } from "./Expression.js";

export type Expand = (args: {
  type: "parallel" | "serial" | "switch" | "literal";
  expression: Expression;
}) => Promise<Expression[]>;

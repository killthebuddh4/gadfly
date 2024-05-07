import { Expression } from "./Ast.js";

export type Parallel = {
  type: "parallel";
  expression: () => Promise<Expression>;
};

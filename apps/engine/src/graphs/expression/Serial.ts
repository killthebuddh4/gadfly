import { Expression } from "./Ast.js";

export type Serial = {
  type: "serial";
  expression: () => Promise<Expression>;
};

import { Expression } from "./Ast.js";

export type Serial = {
  type: "switch";
  expression: () => Promise<Expression>;
};

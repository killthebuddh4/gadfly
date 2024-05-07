import { Expression } from "./Expression.js";

export type Serial = {
  type: "serial";
  expression: () => Promise<Expression>;
};

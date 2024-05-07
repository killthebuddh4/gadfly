import { Expression } from "./Expression.js";

export type Serial = {
  type: "switch";
  expression: () => Promise<Expression>;
};

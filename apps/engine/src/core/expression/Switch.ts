import { Expression } from "./Expression.js";

export type Serial = {
  type: "switch";
  unwrap: () => Promise<Expression>;
  parent: () => Promise<Expression | null>;
  children: () => Promise<Expression[]>;
};

import { Expression } from "./Expression.js";

export type Parallel = {
  type: "parallel";
  unwrap: () => Promise<Expression>;
  parent: () => Promise<Expression | null>;
  children: () => Promise<Expression[]>;
};

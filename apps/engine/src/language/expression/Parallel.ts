import { Expression } from "./Expression.js";

export type Parallel = {
  type: "parallel";
  expression: () => Promise<Expression>;
};

import { Expression } from "./Expression.js";

export type Parallel = {
  type: "parallel";
  unwrap: () => Promise<Expression>;
};

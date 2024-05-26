import { Expression } from "./Expression.js";
import { Environment } from "./Environment.js";

export type Program = {
  expression: () => Promise<Expression>;
  environment: () => Promise<Environment>;
};

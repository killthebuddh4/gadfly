import { Expression } from "./Expression.js";

export type Resolve = (args: {
  expression: Expression;
  query: string;
}) => Promise<string[]>;

import { Expression } from "./Expression.js";

export type Evaluate = (args: { expression: Expression }) => Promise<string>;

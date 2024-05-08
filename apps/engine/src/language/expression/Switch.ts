import { Expression } from "./Expression.js";

export type Serial = {
  type: "switch";
  unwrap: () => Promise<Expression>;
};

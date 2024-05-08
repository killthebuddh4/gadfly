import { Expression } from "./Expression.js";

export type Serial = {
  type: "serial";
  unwrap: () => Promise<Expression>;
};

import { Context } from "./Context.js";
import { Parser } from "./Parser.js";

export type Analytic = {
  id: string;
  type: "Analytic";
  parent: Context;
  children: Parser | null;
};

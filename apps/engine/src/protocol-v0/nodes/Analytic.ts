import { Synthetic } from "./Synthetic.js";
import { Parser } from "./Parser.js";

export type Analytic = {
  id: string;
  type: "Analytic";
  parent: Synthetic;
  children: Parser | null;
};

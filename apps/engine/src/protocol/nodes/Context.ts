import { Analysis } from "./Analysis.js";
import { Analytic } from "./Analytic.js";
import { Synthetic } from "./Synthetic.js";

export type Context = {
  id: string;
  type: "Context";
  parent: Analysis;
  children: Analytic | Synthetic | null;
};

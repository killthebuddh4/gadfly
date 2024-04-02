import { Context } from "./Context.js";
import { Synthetic } from "./Synthetic.js";

export type Analysis = {
  id: string;
  type: "Analysis";
  parent: Synthetic;
  children: Context[];
  classification: {
    type: "SWITCH" | "PARALLEL" | "SERIAL";
  };
};

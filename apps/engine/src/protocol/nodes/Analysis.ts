import { Synthetic } from "./Synthetic.js";

export type Analysis = {
  id: string;
  type: "Analysis";
  parent: Synthetic;
  children: Synthetic[];
  classification: {
    type: "SWITCH" | "PARALLEL" | "SERIAL";
  };
};

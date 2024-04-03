import { Analysis } from "./Analysis.js";

export type Synthetic = {
  id: string;
  type: "Synthetic";
  problem: string;
  parent: Analysis | null;
  children: Analysis[];
};

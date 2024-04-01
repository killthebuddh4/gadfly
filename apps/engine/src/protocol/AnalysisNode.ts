import { SyntheticNode } from "./SyntheticNode.js";
import { ContextNode } from "./ContextNode.js";

export type AnalysisNode = {
  parent: SyntheticNode;
  classification: {
    type: "switch" | "parallel" | "serial";
    reasoning: string;
  };
  contexts: ContextNode[];
};

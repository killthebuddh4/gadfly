import { SyntheticNode } from "./SyntheticNode.js";
import { ContextNode } from "./ContextNode.js";

export type AnalysisNode = {
  parent: SyntheticNode;
  classification: {
    class: "switch" | "parallel" | "serial" | "function";
    reasoning: string;
  };
  contexts: ContextNode[];
};

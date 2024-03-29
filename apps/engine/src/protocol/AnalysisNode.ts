import { SyntheticNode } from "./SyntheticNode.js";
import { ContextNode } from "./ContextNode.js";

export type AnalysisNode = {
  type: "switch" | "parallel" | "serial" | "function";
  parent: SyntheticNode;
  children: ContextNode[];
  reasoning: string;
};

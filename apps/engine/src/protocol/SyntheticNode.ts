import { ContextNode } from "./ContextNode.js";
import { AnalysisNode } from "./AnalysisNode.js";

export type SyntheticNode = {
  problem: string;
  context: ContextNode | null;
  analysis: AnalysisNode | null;
};

import { AnalysisNode } from "./AnalysisNode.js";
import { SyntheticNode } from "./SyntheticNode.js";

export type ContextNode = {
  analysis: AnalysisNode;
  synthetic: SyntheticNode | null;
  reasoning: string;
};

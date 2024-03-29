import { ContextNode } from "./ContextNode.js";
import { AnalysisNode } from "./AnalysisNode.js";

export type SyntheticNode = {
  problem: string;
  incoming: ContextNode | null;
  analysis: AnalysisNode | null;
};

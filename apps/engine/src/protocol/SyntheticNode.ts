import { ContextNode } from "./ContextNode.js";
import { AnalysisNode } from "./AnalysisNode.js";
import { AnalyticNode } from "./AnalyticNode.js";

export type SyntheticNode = {
  problem: string;
  context: ContextNode | null;
  analysis: AnalysisNode | null;
  analytic: AnalyticNode | null;
};

import { AnalysisNode } from "./AnalysisNode.js";
import { ContextNode } from "./ContextNode.js";

export const generateContextNode = async ({
  analysisNode,
}: {
  analysisNode: AnalysisNode;
}): Promise<ContextNode> => {
  return {
    analysis: analysisNode,
    synthetic: null,
    reasoning: "No reasoning provided.",
  };
};

import { ContextNode } from "./ContextNode.js";
import { SyntheticNode } from "./SyntheticNode.js";

export const generateSyntheticNode = async ({
  contextNode,
}: {
  contextNode: ContextNode;
}): Promise<SyntheticNode> => {
  return {
    problem: "No problem provided.",
    context: contextNode,
    analysis: null,
    analytic: null,
  };
};

import { AnalysisNode } from "./AnalysisNode.js";
import { SyntheticNode } from "./SyntheticNode.js";

export const generateAnalysisNode = async ({
  syntheticNode,
}: {
  syntheticNode: SyntheticNode;
}): Promise<AnalysisNode> => {
  const classification = await getClassification({ synthetic: syntheticNode });

  return {
    parent: syntheticNode,
    classification: {
      type: classification,
      reasoning: "Randomly generated",
    },
    contexts: [],
  };
};

const getClassification = async (_args: { synthetic: SyntheticNode }) => {
  const c = Math.random();

  if (c < 0.33) {
    return "switch";
  } else if (c < 0.66) {
    return "parallel";
  } else {
    return "serial";
  }
};

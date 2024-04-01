import { SyntheticNode } from "./SyntheticNode.js";
import { AnalyticNode } from "./AnalyticNode.js";

export const generateAnalyticNode = async ({
  synthetic,
  path,
}: {
  synthetic: SyntheticNode;
  path: string;
}): Promise<AnalyticNode> => {
  return {
    synthetic,
    path,
  };
};

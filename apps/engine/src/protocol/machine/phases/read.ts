import { read as nodesRead } from "../../primitives/graph/nodes/read.js";

export const read = async ({ graphId }: { graphId: string }) => {
  const nodes = await nodesRead({ id: graphId });

  return { phases: nodes };
};

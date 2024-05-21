import { read as nodesRead } from "../../../primitives/graph/nodes/read.js";
import { read as edgesRead } from "../../../primitives/graph/edges/read.js";

export const read = async ({ graphId }: { graphId: string }) => {
  const nodes = await nodesRead({ id: graphId });
  const edges = await edgesRead({ id: graphId });

  // i.e. isRoot
  const isFirst = (nodeId: string) => {
    return !edges.some((edge) => edge.to_id === nodeId);
  };

  const first = nodes.find((node) => isFirst(node.id));

  return { first: first || null };
};

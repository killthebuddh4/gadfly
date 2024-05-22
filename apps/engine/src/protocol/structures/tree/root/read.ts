import { read as nodesRead } from "../../../primitives/graph/nodes/read.js";
import { read as edgesRead } from "../../../primitives/graph/edges/read.js";

export const read = async ({ graphId }: { graphId: string }) => {
  const nodes = await nodesRead({ id: graphId });
  const edges = await edgesRead({ id: graphId });

  const isRoot = (nodeId: string) => {
    return !edges.some((edge) => edge.to_id === nodeId);
  };

  const root = nodes.find((node) => isRoot(node.id));

  return { root: root || null };
};

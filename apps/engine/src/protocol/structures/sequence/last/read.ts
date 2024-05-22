import { read as nodesRead } from "../../../primitives/graph/nodes/read.js";
import { read as edgesRead } from "../../../primitives/graph/edges/read.js";

export const read = async ({ graphId }: { graphId: string }) => {
  const nodes = await nodesRead({ id: graphId });
  const edges = await edgesRead({ id: graphId });

  const isLast = (nodeId: string) => {
    return !edges.some((edge) => edge.from_id === nodeId);
  };

  const last = nodes.find((node) => isLast(node.id));

  return { last: last || null };
};

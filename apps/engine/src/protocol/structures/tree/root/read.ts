import { read as nodesRead } from "../../../primitives/graph/nodes/read.js";
import { read as edgesRead } from "../../../primitives/graph/edges/read.js";

export const read = async ({ id }: { id: string }) => {
  const nodes = await nodesRead({ id });
  const edges = await edgesRead({ id });

  const isTail = (nodeId: string) => {
    return !edges.some((edge) => edge.to_id === nodeId);
  };

  const root = nodes.filter((node) => isTail(node.id));

  return { root };
};

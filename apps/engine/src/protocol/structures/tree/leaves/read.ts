import { read as nodesRead } from "../../../primitives/graph/nodes/read.js";
import { read as edgesRead } from "../../../primitives/graph/edges/read.js";

export const read = async ({ id }: { id: string }) => {
  const nodes = await nodesRead({ id });
  const edges = await edgesRead({ id });

  const isLeaf = (nodeId: string) => {
    return !edges.some((edge) => edge.from_id === nodeId);
  };

  const leaves = nodes.filter((node) => isLeaf(node.id));

  return leaves;
};

import { read as nodesRead } from "../../../primitives/graph/nodes/read.js";
import { read as edgesRead } from "../../../primitives/graph/edges/read.js";

export const read = async ({ id }: { id: string }) => {
  const nodes = await nodesRead({ id });
  const edges = await edgesRead({ id });

  const isFirst = (nodeId: string) => {
    return !edges.some((edge) => edge.to_id === nodeId);
  };

  const first = nodes.filter((node) => isFirst(node.id));

  if (first.length > 1) {
    throw new Error("Multiple roots found");
  }

  if (first.length === 0) {
    return null;
  }

  return first[0];
};

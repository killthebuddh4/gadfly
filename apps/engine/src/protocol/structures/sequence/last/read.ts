import { read as nodesRead } from "../../../primitives/graph/nodes/read.js";
import { read as edgesRead } from "../../../primitives/graph/edges/read.js";

export const read = async ({ id }: { id: string }) => {
  const nodes = await nodesRead({ id });
  const edges = await edgesRead({ id });

  const isLast = (nodeId: string) => {
    return !edges.some((edge) => edge.from_id === nodeId);
  };

  const last = nodes.filter((node) => isLast(node.id));

  if (last.length > 1) {
    throw new Error("Multiple last found");
  }

  if (last.length === 0) {
    return null;
  }

  return last[0];
};

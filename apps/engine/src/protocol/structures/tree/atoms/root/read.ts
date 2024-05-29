import { read as nodesRead } from "../../../../primitives/graph/nodes/read.js";
import { read as edgesRead } from "../../../../primitives/graph/edges/read.js";

export const read = async ({ id }: { id: string }) => {
  const nodes = await nodesRead({ id });
  const edges = await edgesRead({ id });

  const isRoot = (nodeId: string) => {
    return !edges.some((edge) => edge.to_id === nodeId);
  };

  const roots = nodes.filter((node) => isRoot(node.id));

  if (roots.length > 1) {
    throw new Error("Multiple roots found");
  }

  if (roots.length === 0) {
    return null;
  }

  return roots[0];
};

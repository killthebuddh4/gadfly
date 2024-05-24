import { read as nodesRead } from "../../../primitives/graph/nodes/read.js";
import { read as edgesRead } from "../../../primitives/graph/edges/read.js";

export const read = async ({ graphId }: { graphId: string }) => {
  const nodes = await nodesRead({ id: graphId });
  const edges = await edgesRead({ id: graphId });

  const isInitial = (nodeId: string) => {
    return !edges.some((edge) => edge.to_id === nodeId);
  };

  const initial = nodes.filter((node) => isInitial(node.id));

  return { initial };
};

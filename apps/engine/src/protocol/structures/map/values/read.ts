import { read as nodesRead } from "../../../primitives/graph/nodes/read.js";
import { read as edgesRead } from "../../../primitives/graph/edges/read.js";

export const read = async ({ graphId }: { graphId: string }) => {
  const nodes = await nodesRead({ id: graphId });
  const edges = await edgesRead({ id: graphId });

  const isValue = (nodeId: string) =>
    edges.some((edge) => edge.to_id === nodeId) &&
    !edges.some((edge) => edge.from_id === nodeId);

  return { values: nodes.filter((node) => isValue(node.id)) };
};

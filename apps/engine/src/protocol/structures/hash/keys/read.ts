import { read as nodesRead } from "../../../primitives/graph/nodes/read.js";
import { read as edgesRead } from "../../../primitives/graph/edges/read.js";

export const read = async ({ mapId }: { mapId: string }) => {
  const nodes = await nodesRead({ id: mapId });
  const edges = await edgesRead({ id: mapId });

  const isKey = (nodeId: string) =>
    edges.some((edge) => edge.from_id === nodeId) &&
    !edges.some((edge) => edge.to_id === nodeId);

  return { keys: nodes.filter((node) => isKey(node.id)) };
};

import { read as downstreamRead } from "../../../../../../primitives/node/downstream/read.js";
import { read as nodesRead } from "../../../../../../primitives/graph/nodes/read.js";

export const read = async ({
  id,
  graph_id,
}: {
  id: string;
  graph_id: string;
}) => {
  const downstream = await downstreamRead({ id });

  if (downstream.length === 0) {
    return [];
  }

  const nodes = await nodesRead({ id: graph_id });

  const children = downstream.map((edge) => {
    const node = nodes.find((node) => node.id === edge.to_id);

    if (node === undefined) {
      throw new Error("Found downstream edge but not the child node");
    }

    return node;
  });

  return children;
};

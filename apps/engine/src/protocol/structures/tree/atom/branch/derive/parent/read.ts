import { read as readUpstream } from "../../../../../../primitives/node/upstream/read.js";
import { read as readNode } from "../../../../../../primitives/node/read.js";

export const read = async ({
  id,
  graph_id,
}: {
  id: string;
  graph_id: string;
}) => {
  const upstream = await readUpstream({ id: graph_id });

  const parents = upstream.filter((edge) => edge.from_id === id);

  if (parents.length === 0) {
    return null;
  }

  if (parents.length > 1) {
    throw new Error("Multiple parents found");
  }

  const parent = parents[0];

  const node = await readNode({ id: parent.from_id });

  if (node === null) {
    throw new Error("Found parent edge but not the parent node");
  }

  return node;
};

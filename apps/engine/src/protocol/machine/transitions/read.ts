import { read as edgesRead } from "../../primitives/graph/edges/read.js";

export const read = async ({ graphId }: { graphId: string }) => {
  const edges = await edgesRead({ id: graphId });

  return { transitions: edges };
};

import { read as edgesRead } from "../../../../graph/graph/edges/read.js";

export const read = async ({ id }: { id: string }) => {
  const edges = await edgesRead({ id });

  return edges;
};

import { read as graphRead } from "../../../graph/graph/read.js";

export const read = async ({ id }: { id: string }) => {
  const graph = await graphRead({ id });

  return graph;
};

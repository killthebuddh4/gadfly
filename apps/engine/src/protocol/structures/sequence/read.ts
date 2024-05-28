import { read as graphRead } from "../../primitives/graph/read.js";

export const read = async ({ id }: { id: string }) => {
  const graph = await graphRead({ id });

  return graph;
};

import { read as graphFirstRead } from "../../primitives/graph/read.js";

export const read = async ({ id }: { id: string }) => {
  const graph = await graphFirstRead({ id });

  return { sequence: graph };
};

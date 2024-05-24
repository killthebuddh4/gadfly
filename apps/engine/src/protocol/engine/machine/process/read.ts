import { read as graphInitialRead } from "../../../primitives/graph/read.js";

export const read = async ({ id }: { id: string }) => {
  const graph = await graphInitialRead({ id });

  return { process: graph };
};

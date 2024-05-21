import { read as graphRootRead } from "../../../primitives/graph/root/read.js";

export const read = async ({ id }: { id: string }) => {
  const graph = await graphRootRead({ id });

  return { tree: graph };
};

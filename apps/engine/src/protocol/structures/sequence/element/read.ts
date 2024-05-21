import { read as nodeRootRead } from "../../../primitives/node/read.js";

export const read = async ({ id }: { id: string }) => {
  const node = await nodeRootRead({ id });

  return { element: node };
};

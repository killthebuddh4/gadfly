import { read as edgeRootRead } from "../../../primitives/edge/read.js";

export const read = async ({ id }: { id: string }) => {
  const edge = await edgeRootRead({ id });

  return { path: edge };
};

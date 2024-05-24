import { read as edgeFirstRead } from "../../../primitives/edge/read.js";

export const read = async ({ id }: { id: string }) => {
  const edge = await edgeFirstRead({ id });

  return { iterator: edge };
};

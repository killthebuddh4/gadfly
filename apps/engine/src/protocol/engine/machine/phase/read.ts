import { read as nodeInitialRead } from "../../../primitives/node/read.js";

export const read = async ({ id }: { id: string }) => {
  const node = await nodeInitialRead({ id });

  return { phase: node };
};

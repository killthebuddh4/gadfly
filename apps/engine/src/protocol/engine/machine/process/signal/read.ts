import { read as edgeInitialRead } from "../../../../primitives/edge/read.js";

export const read = async ({ id }: { id: string }) => {
  const edge = await edgeInitialRead({ id });

  return { signal: edge };
};

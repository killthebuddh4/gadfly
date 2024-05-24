import { read as nodeFirstRead } from "../../../primitives/node/read.js";

export const read = async ({ id }: { id: string }) => {
  const node = await nodeFirstRead({ id });

  return { element: node };
};

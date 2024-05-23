import { read as treeRootRead } from "../../structures/tree/read.js";

export const read = async ({ id }: { id: string }) => {
  const tree = await treeRootRead({ id });

  return { trace: tree };
};

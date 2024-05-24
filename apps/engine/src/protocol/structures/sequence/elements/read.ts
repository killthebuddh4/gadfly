import { read as nodesRead } from "../../../primitives/graph/nodes/read.js";

export const read = async ({ id }: { id: string }) => {
  const nodes = await nodesRead({ id });

  return { Elements: nodes };
};

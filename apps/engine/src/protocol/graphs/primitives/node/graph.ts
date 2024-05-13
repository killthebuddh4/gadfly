import { prisma } from "../../../../lib/prisma.js";

export const graph = async ({ id }: { id: string }) => {
  const node = await prisma.node.findUnique({
    include: {
      graph: true,
    },
    where: {
      id,
    },
  });

  if (node === null) {
    throw new Error(`Node not found for id: ${id}`);
  }

  return node.graph;
};

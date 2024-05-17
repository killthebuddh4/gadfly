import { prisma } from "../../../../lib/prisma.js";

export const read = async ({ id }: { id: string }) => {
  const graph = await prisma.graph.findUnique({
    include: {
      children: true,
    },
    where: {
      id,
    },
  });

  if (graph === null) {
    throw new Error(`Graph with id ${id} not found`);
  }

  return graph.children;
};

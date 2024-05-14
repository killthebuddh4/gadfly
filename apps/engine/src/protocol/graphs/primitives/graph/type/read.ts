import { prisma } from "../../../../../lib/prisma.js";

export const read = async ({ id }: { id: string }) => {
  const graph = await prisma.graph.findUnique({
    include: {
      type: true,
    },
    where: {
      id,
    },
  });

  if (graph === null) {
    throw new Error(`Graph not found for id: ${id}`);
  }

  return graph.type;
};

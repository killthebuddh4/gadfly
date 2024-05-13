import { prisma } from "../../../../lib/prisma.js";

export const value = async ({ id }: { id: string }) => {
  const graph = await prisma.graph.findUnique({
    include: {
      value: true,
    },
    where: {
      id,
    },
  });

  if (graph === null) {
    throw new Error(`Graph not found for id: ${id}`);
  }

  return graph.value;
};

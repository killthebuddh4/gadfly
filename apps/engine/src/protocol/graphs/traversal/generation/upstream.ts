import { prisma } from "../../../../lib/prisma.js";

export const upstream = async ({ id }: { id: string }) => {
  const generation = await prisma.generation.findUnique({
    where: {
      id,
    },
  });

  if (generation === null) {
    throw new Error(`Generation not found: ${id}`);
  }

  return prisma.node.findMany({
    where: {
      downstream: {
        some: {
          generation: {
            id,
          },
        },
      },
    },
  });
};

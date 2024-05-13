import { prisma } from "../../../../lib/prisma.js";

export const downstream = async ({ id }: { id: string }) => {
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
      upstream: {
        some: {
          generation: {
            id,
          },
        },
      },
    },
  });
};

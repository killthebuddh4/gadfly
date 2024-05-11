import { prisma } from "../../../../lib/prisma.js";

export const setGeneration = async ({
  id,
  generation,
}: {
  id: string;
  generation: string;
}) => {
  return prisma.pointer.update({
    where: {
      id,
    },
    data: {
      generation: {
        connect: {
          id: generation,
        },
      },
    },
  });
};

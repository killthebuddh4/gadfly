import { prisma } from "../../../../lib/prisma.js";

export const setEdge = async ({ id, edge }: { id: string; edge: string }) => {
  return prisma.pointer.update({
    where: {
      id,
    },
    data: {
      edge: {
        connect: {
          id: edge,
        },
      },
    },
  });
};

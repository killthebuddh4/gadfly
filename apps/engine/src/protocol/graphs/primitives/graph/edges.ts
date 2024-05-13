import { prisma } from "../../../../lib/prisma.js";

export const edges = async ({ id }: { id: string }) => {
  return prisma.edge.findMany({
    where: {
      graph: {
        id,
      },
    },
  });
};

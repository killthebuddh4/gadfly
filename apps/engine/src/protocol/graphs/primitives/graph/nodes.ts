import { prisma } from "../../../../lib/prisma.js";

export const nodes = async ({ id }: { id: string }) => {
  return prisma.node.findMany({
    where: {
      graph: {
        id,
      },
    },
  });
};

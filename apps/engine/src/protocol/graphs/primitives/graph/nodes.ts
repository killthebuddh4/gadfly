import { prisma } from "../../../../lib/prisma.js";

export const heads = async ({ id }: { id: string }) => {
  return prisma.node.findMany({
    where: {
      graph: {
        id,
      },
    },
  });
};

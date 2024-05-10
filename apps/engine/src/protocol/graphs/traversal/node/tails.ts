import { prisma } from "../../../../lib/prisma.js";

export const tails = async ({ id }: { id: string }) => {
  return prisma.node.findMany({
    where: {
      graph: {
        id,
      },
      upstream: {
        none: {},
      },
    },
  });
};

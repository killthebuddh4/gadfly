import { prisma } from "../../../../../lib/prisma.js";

export const read = async ({ id }: { id: string }) => {
  return prisma.node.findUnique({
    where: {
      id,
    },
  });
};

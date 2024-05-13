import { prisma } from "../../../../lib/prisma.js";

export const upstream = async ({ id }: { id: string }) => {
  return prisma.edge.findMany({
    where: {
      to: {
        id,
      },
    },
  });
};

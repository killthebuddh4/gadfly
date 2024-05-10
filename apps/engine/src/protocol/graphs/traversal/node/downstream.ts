import { prisma } from "../../../../lib/prisma.js";

export const downstream = async ({ id }: { id: string }) => {
  return prisma.edge.findMany({
    where: {
      from: {
        id,
      },
    },
  });
};

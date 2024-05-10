import { prisma } from "../../../../lib/prisma.js";

export const upstream = async ({ id }: { id: string }) => {
  return prisma.node.findFirst({
    where: {
      downstream: {
        some: {
          to: {
            id,
          },
        },
      },
    },
  });
};

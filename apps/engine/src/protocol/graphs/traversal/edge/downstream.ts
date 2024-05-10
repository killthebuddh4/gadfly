import { prisma } from "../../../../lib/prisma.js";

export const downstream = async ({ id }: { id: string }) => {
  return prisma.node.findFirst({
    where: {
      upstream: {
        some: {
          to: {
            id,
          },
        },
      },
    },
  });
};

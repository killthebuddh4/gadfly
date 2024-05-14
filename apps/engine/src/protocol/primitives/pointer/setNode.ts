import { prisma } from "../../../lib/prisma.js";

export const setNode = async ({ id, node }: { id: string; node: string }) => {
  return prisma.pointer.update({
    where: {
      id,
    },
    data: {
      node: {
        connect: {
          id: node,
        },
      },
    },
  });
};

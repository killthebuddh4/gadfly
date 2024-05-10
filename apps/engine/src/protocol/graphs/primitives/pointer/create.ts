import { prisma } from "../../../../lib/prisma.js";

export const create = async ({ from }: { from: string }) => {
  return prisma.pointer.create({
    data: {
      from: {
        connect: {
          id: from,
        },
      },
    },
  });
};

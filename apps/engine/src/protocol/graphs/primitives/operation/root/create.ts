import { prisma } from "../../../../../lib/prisma.js";

export const create = async ({ type }: { type: string }) => {
  return prisma.operation.create({
    data: {
      type: {
        connect: {
          id: type,
        },
      },
    },
  });
};

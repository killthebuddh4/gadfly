import { prisma } from "../../../../lib/prisma.js";

export const create = async ({ type }: { type: string }) => {
  return prisma.generation.create({
    data: {
      type: {
        connect: {
          id: type,
        },
      },
    },
  });
};

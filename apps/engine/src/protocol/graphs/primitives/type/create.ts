import { prisma } from "../../../../lib/prisma.js";

export const create = async ({ type }: { type: number }) => {
  return prisma.type.create({
    data: {
      type,
    },
  });
};

import { prisma } from "../../../../lib/prisma.js";

export const create = async ({ value }: { value: string }) => {
  return prisma.value.create({
    data: {
      value,
    },
  });
};

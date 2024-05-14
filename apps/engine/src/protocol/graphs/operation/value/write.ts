import { prisma } from "../../../../lib/prisma.js";

export const write = async ({ id, value }: { id: string; value: string }) => {
  return prisma.operation.update({
    where: {
      id,
    },
    data: {
      value: {
        connect: {
          id: value,
        },
      },
    },
  });
};

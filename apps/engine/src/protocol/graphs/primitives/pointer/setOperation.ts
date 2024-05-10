import { prisma } from "../../../../lib/prisma.js";

export const setOperation = async ({
  id,
  operation,
}: {
  id: string;
  operation: string;
}) => {
  return prisma.pointer.update({
    where: {
      id,
    },
    data: {
      operation: {
        connect: {
          id: operation,
        },
      },
    },
  });
};

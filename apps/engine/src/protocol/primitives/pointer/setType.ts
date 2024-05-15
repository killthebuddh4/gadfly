import { prisma } from "../../../lib/prisma.js";

export const setType = async ({ id, type }: { id: string; type: string }) => {
  return prisma.pointer.update({
    where: {
      id,
    },
    data: {
      to_type: {
        connect: {
          id: type,
        },
      },
    },
  });
};

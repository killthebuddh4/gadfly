import { prisma } from "../../../lib/prisma.js";

export const setValue = async ({
  id,
  value,
}: {
  id: string;
  value: string;
}) => {
  return prisma.pointer.update({
    where: {
      id,
    },
    data: {
      to_value: {
        connect: {
          id: value,
        },
      },
    },
  });
};

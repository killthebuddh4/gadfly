import { prisma } from "../../../../lib/prisma.js";

export const setValue = async ({
  id,
  value,
}: {
  id: string;
  value: string;
}) => {
  return prisma.graph.update({
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

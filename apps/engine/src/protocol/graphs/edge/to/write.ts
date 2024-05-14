import { prisma } from "../../../../lib/prisma.js";

export const write = ({ id, to }: { id: string; to: string }) => {
  return prisma.edge.update({
    where: {
      id,
    },
    data: {
      to: {
        connect: {
          id: to,
        },
      },
    },
  });
};

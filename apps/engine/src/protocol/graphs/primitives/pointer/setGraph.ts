import { prisma } from "../../../../lib/prisma.js";

export const setGraph = async ({
  id,
  graph,
}: {
  id: string;
  graph: string;
}) => {
  return prisma.pointer.update({
    where: {
      id,
    },
    data: {
      graph: {
        connect: {
          id: graph,
        },
      },
    },
  });
};

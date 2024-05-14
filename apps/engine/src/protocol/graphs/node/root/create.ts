import { prisma } from "../../../../lib/prisma.js";

export const create = async ({
  graph,
  type,
}: {
  graph: string;
  type: string;
}) => {
  return prisma.node.create({
    data: {
      graph: {
        connect: {
          id: graph,
        },
      },
      type: {
        connect: {
          id: type,
        },
      },
    },
  });
};

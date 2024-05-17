import { prisma } from "../../../../lib/prisma.js";

export const create = async ({
  graph,
  value,
}: {
  graph: string;
  value: string;
}) => {
  return prisma.node.create({
    data: {
      graph: {
        connect: {
          id: graph,
        },
      },
      value: {
        connect: {
          id: value,
        },
      },
    },
  });
};

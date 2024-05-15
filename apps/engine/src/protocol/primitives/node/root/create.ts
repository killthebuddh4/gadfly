import { prisma } from "../../../../lib/prisma.js";

export const create = async ({
  graph,
  type,
  value,
}: {
  graph: string;
  type: string;
  value: string;
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
      value: {
        connect: {
          id: value,
        },
      },
    },
  });
};

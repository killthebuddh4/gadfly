import { prisma } from "../../../../lib/prisma.js";

export const create = async ({
  graph,
  from,
  type,
  operation,
}: {
  graph: string;
  from: string;
  type: string;
  operation: string;
}) => {
  return prisma.edge.create({
    data: {
      graph: {
        connect: {
          id: graph,
        },
      },
      from: {
        connect: {
          id: from,
        },
      },
      type: {
        connect: {
          id: type,
        },
      },
      operation: {
        connect: {
          id: operation,
        },
      },
    },
  });
};

import { prisma } from "../../../../lib/prisma.js";

export const create = async ({
  graph,
  from,
  type,
  generation,
}: {
  graph: string;
  from: string;
  type: string;
  generation: string;
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
      generation: {
        connect: {
          id: generation,
        },
      },
    },
  });
};

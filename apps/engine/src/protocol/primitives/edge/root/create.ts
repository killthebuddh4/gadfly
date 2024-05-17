import { prisma } from "../../../../lib/prisma.js";

export const create = async ({
  graph,
  from,
  to,
  value,
}: {
  graph: string;
  from: string;
  to: string;
  value: string;
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
      to: {
        connect: {
          id: to,
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

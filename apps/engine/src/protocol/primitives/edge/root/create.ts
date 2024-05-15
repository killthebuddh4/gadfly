import { prisma } from "../../../../lib/prisma.js";

export const create = async ({
  graph,
  from,
  to,
  type,
  value,
}: {
  graph: string;
  from: string;
  type: string;
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
      type: {
        connect: {
          id: type,
        },
      },
    },
  });
};

import { prisma } from "../../../../lib/prisma.js";

export const create = async ({
  type_id,
  graph_id,
  value_id,
}: {
  type_id: string;
  graph_id: string;
  value_id: string;
}) => {
  return prisma.node.create({
    data: {
      type: {
        connect: {
          id: type_id,
        },
      },
      graph: {
        connect: {
          id: graph_id,
        },
      },
      value: {
        connect: {
          id: value_id,
        },
      },
    },
  });
};

import { prisma } from "../../../lib/prisma.js";

export const create = async ({
  graph_id,
  from_id,
  to_id,
  value_id,
  type_id,
}: {
  graph_id: string;
  from_id: string;
  to_id: string;
  value_id: string;
  type_id: string;
}) => {
  return prisma.edge.create({
    data: {
      graph: {
        connect: {
          id: graph_id,
        },
      },
      from: {
        connect: {
          id: from_id,
        },
      },
      to: {
        connect: {
          id: to_id,
        },
      },
      value: {
        connect: {
          id: value_id,
        },
      },
      type: {
        connect: {
          id: type_id,
        },
      },
    },
  });
};

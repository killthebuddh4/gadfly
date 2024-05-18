import { prisma } from "../../../../lib/prisma.js";

export const create = async ({
  type_id,
  value_id,
}: {
  type_id: string;
  value_id: string;
}) => {
  const data = await prisma.graph.create({
    data: {
      type: {
        connect: {
          id: type_id,
        },
      },
      value: {
        connect: {
          id: value_id,
        },
      },
    },
  });

  return data;
};

import { prisma } from "../../../../lib/prisma.js";

export const create = async ({
  type,
  value,
}: {
  value: string;
  type: string;
}) => {
  const data = await prisma.graph.create({
    data: {
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

  return data;
};

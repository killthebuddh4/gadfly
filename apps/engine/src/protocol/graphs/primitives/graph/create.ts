import { prisma } from "../../../../lib/prisma.js";

export const create = async ({ type }: { type: string }) => {
  const data = await prisma.graph.create({
    data: {
      type: {
        connect: {
          id: type,
        },
      },
    },
  });

  return data;
};

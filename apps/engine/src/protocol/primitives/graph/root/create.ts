import { prisma } from "../../../../lib/prisma.js";

export const create = async ({ value }: { value: string }) => {
  const data = await prisma.graph.create({
    data: {
      value: {
        connect: {
          id: value,
        },
      },
    },
  });

  return data;
};

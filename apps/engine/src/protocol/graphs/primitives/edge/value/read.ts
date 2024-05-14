import { prisma } from "../../../../../lib/prisma.js";

export const read = async ({ id }: { id: string }) => {
  const edge = await prisma.edge.findUnique({
    include: {
      value: true,
    },
    where: {
      id,
    },
  });

  if (edge === null) {
    throw new Error(`Edge not found for id: ${id}`);
  }

  return edge.value;
};

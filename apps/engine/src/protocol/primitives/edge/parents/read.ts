import { prisma } from "../../../../lib/prisma.js";

export const read = async ({ id }: { id: string }) => {
  const edge = await prisma.edge.findUnique({
    include: {
      parents: true,
    },
    where: {
      id,
    },
  });

  if (edge === null) {
    throw new Error(`Edge with id ${id} not found`);
  }

  return edge.parents;
};

import { prisma } from "../../../../lib/prisma.js";

export const value = async ({ id }: { id: string }) => {
  const edge = await prisma.edge.findUnique({
    include: {
      type: true,
    },
    where: {
      id,
    },
  });

  if (edge === null) {
    throw new Error(`Edge not found for id: ${id}`);
  }

  return edge.type;
};

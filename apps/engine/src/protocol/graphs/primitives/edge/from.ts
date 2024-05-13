import { prisma } from "../../../../lib/prisma.js";

export const from = async ({ id }: { id: string }) => {
  const edge = await prisma.edge.findUnique({
    include: {
      from: true,
    },
    where: {
      id,
    },
  });

  if (edge === null) {
    throw new Error(`Edge not found for id: ${id}`);
  }

  return edge.from;
};

import { prisma } from "../../../lib/prisma.js";

export const read = async ({ id }: { id: string }) => {
  const edge = await prisma.edge.findUnique({
    where: {
      id,
    },
  });

  if (edge === null) {
    throw new Error("Edge not found");
  }

  return edge;
};

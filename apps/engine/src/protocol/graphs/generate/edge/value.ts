import { prisma } from "../../../../lib/prisma.js";

export const value = async ({ id }: { id: string }) => {
  const edge = await prisma.edge.findUnique({
    where: {
      id,
    },
  });

  if (edge === null) {
    throw new Error(`Edge not found for id: ${id}`);
  }

  throw new Error("Not implemented");
};

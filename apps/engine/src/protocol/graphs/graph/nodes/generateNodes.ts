import { prisma } from "../../../../lib/prisma.js";

export const generateNodes = async ({ id }: { id: string }) => {
  const graph = await prisma.graph.findUnique({
    where: {
      id,
    },
  });

  if (graph === null) {
    throw new Error(`Graph not found for id: ${id}`);
  }

  throw new Error("Not implemented");
};

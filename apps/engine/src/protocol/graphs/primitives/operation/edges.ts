import { prisma } from "../../../../lib/prisma.js";

export const edges = async ({ id }: { id: string }) => {
  const operation = await prisma.operation.findUnique({
    include: {
      edges: true,
    },
    where: {
      id,
    },
  });

  if (operation === null) {
    throw new Error(`Operation not found for id: ${id}`);
  }

  return operation.edges;
};

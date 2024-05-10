import { prisma } from "../../../../lib/prisma.js";

export const downstream = async ({ id }: { id: string }) => {
  const operation = await prisma.operation.findUnique({
    where: {
      id,
    },
  });

  if (operation === null) {
    throw new Error(`Operation not found: ${id}`);
  }

  return prisma.node.findMany({
    where: {
      upstream: {
        some: {
          operation: {
            id,
          },
        },
      },
    },
  });
};

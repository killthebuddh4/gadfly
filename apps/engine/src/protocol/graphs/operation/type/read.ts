import { prisma } from "../../../../lib/prisma.js";

export const read = async ({ id }: { id: string }) => {
  const operation = await prisma.operation.findUnique({
    include: {
      type: true,
    },
    where: {
      id,
    },
  });

  if (operation === null) {
    throw new Error(`Operation not found for id: ${id}`);
  }

  return operation.type;
};

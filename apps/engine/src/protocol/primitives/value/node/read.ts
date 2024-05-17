import { prisma } from "../../../../lib/prisma.js";

export const read = async ({ id }: { id: string }) => {
  const value = await prisma.value.findUnique({
    include: {
      node: true,
    },
    where: { id },
  });

  if (value === null) {
    throw new Error(`Value with ID ${id} not found.`);
  }

  return value.node;
};

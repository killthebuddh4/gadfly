import { prisma } from "../../../../lib/prisma.js";

export const read = async ({ id }: { id: string }) => {
  const value = await prisma.value.findUnique({
    include: {
      parents: true,
    },
    where: {
      id,
    },
  });

  if (value === null) {
    throw new Error(`Value with id ${id} not found`);
  }

  return value.parents;
};

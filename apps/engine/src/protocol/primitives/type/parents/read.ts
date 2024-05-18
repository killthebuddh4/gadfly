import { prisma } from "../../../../lib/prisma.js";

export const read = async ({ id }: { id: string }) => {
  const type = await prisma.type.findUnique({
    include: {
      parents: true,
    },
    where: {
      id,
    },
  });

  if (type === null) {
    throw new Error(`Type with id ${id} not found`);
  }

  return type.parents;
};

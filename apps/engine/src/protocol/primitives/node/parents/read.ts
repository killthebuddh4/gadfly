import { prisma } from "../../../../lib/prisma.js";

export const read = async ({ id }: { id: string }) => {
  const node = await prisma.node.findUnique({
    include: {
      parents: true,
    },
    where: {
      id,
    },
  });

  if (node === null) {
    throw new Error(`Node with id ${id} not found`);
  }

  return node.parents;
};

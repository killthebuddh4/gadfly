import { prisma } from "../../../../lib/prisma.js";

export const upstream = async ({ id }: { id: string }) => {
  const pointer = await prisma.pointer.findUnique({
    include: {
      node: true,
    },
    where: {
      id,
    },
  });

  if (pointer === null) {
    throw new Error(`Pointer not found: ${id}`);
  }

  return pointer.node;
};

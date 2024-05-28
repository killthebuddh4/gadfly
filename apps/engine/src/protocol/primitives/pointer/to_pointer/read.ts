import { prisma } from "../../../../lib/prisma.js";

export const read = async ({ id }: { id: string }) => {
  const pointer = await prisma.pointer.findUnique({
    include: {
      to_pointer: true,
    },
    where: {
      id,
    },
  });

  if (pointer === null) {
    throw new Error(`Pointer not found: ${id}`);
  }

  return pointer.to_pointer;
};

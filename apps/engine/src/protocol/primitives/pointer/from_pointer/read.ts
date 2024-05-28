import { prisma } from "../../../../lib/prisma.js";

export const read = async ({ id }: { id: string }) => {
  const pointer = await prisma.pointer.findUnique({
    include: {
      from_pointer: true,
    },
    where: {
      id,
    },
  });

  if (pointer === null) {
    throw new Error(`Pointer not found: ${id}`);
  }

  return pointer.from_pointer;
};

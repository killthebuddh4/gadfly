import { prisma } from "../../../../lib/prisma.js";

export const type = async ({ id }: { id: string }) => {
  const value = await prisma.value.findUnique({
    include: {
      type: true,
    },
    where: {
      id,
    },
  });

  if (value === null) {
    throw new Error(`Value not found for id: ${id}`);
  }

  return value.type;
};

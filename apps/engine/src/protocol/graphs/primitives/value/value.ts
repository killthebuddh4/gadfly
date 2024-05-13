import { prisma } from "../../../../lib/prisma.js";

export const value = async ({ id }: { id: string }) => {
  const val = await prisma.value.findUnique({
    include: {
      type: true,
    },
    where: {
      id,
    },
  });

  if (val === null) {
    throw new Error(`Value not found for id: ${id}`);
  }

  return val.value;
};

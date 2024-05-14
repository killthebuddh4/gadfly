import { prisma } from "../../../../lib/prisma.js";

export const description = async ({ id }: { id: string }) => {
  const type = await prisma.type.findUnique({
    where: {
      id,
    },
  });

  if (type === null) {
    throw new Error(`Type not found for id: ${id}`);
  }

  return type.description;
};

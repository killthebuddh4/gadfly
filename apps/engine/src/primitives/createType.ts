import { prisma } from "../lib/prisma.js";

export const createType = async ({ name }: { name: string }) => {
  const type = await prisma.type.create({
    data: {
      name,
      sequence: { create: {} },
    },
  });

  return type;
};

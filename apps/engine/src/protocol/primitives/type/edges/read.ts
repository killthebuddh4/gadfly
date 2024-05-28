import { prisma } from "../../../../lib/prisma.js";

export const read = async ({ id }: { id: string }) => {
  const type = await prisma.type.findUnique({
    include: {
      edges: true,
    },
    where: {
      id,
    },
  });

  if (type === null) {
    throw new Error("Type not found");
  }

  return type.edges;
};

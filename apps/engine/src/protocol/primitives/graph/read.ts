import { prisma } from "../../../lib/prisma.js";

export const read = async ({ id }: { id: string }) => {
  const data = await prisma.graph.findUnique({
    where: {
      id,
    },
  });

  if (!data) {
    throw new Error(`Graph not found: ${id}`);
  }

  return data;
};

import { prisma } from "../../../../lib/prisma.js";

export const downstream = async ({ id }: { id: string }) => {
  const node = await prisma.node.findUnique({
    include: {
      downstream: true,
    },
    where: {
      id,
    },
  });

  if (node === null) {
    throw new Error(`Node not found: ${id}`);
  }

  return node.downstream;
};

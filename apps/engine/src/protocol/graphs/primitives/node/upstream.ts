import { prisma } from "../../../../lib/prisma.js";

export const upstream = async ({ id }: { id: string }) => {
  const node = await prisma.node.findUnique({
    include: {
      upstream: true,
    },
    where: {
      id,
    },
  });

  if (node === null) {
    throw new Error(`Node not found: ${id}`);
  }

  return node.upstream;
};

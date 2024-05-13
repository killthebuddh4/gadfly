import { prisma } from "../../../../lib/prisma.js";

export const operation = ({ id }: { id: string }) => {
  const node = prisma.node.findUnique({
    where: {
      id,
    },
  });

  if (node === null) {
    throw new Error(`Node not found for id: ${id}`);
  }

  throw new Error("Not implemented");
};

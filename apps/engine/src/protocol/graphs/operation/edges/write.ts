import { prisma } from "../../../../lib/prisma.js";

export const write = async ({ id, edges }: { id: string; edges: string[] }) => {
  return prisma.operation.update({
    where: {
      id,
    },
    data: {
      edges: {
        connect: edges.map((edge) => ({ id: edge })),
      },
    },
  });
};

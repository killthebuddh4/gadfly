import { prisma } from "../../../../lib/prisma.js";
import { tails as tailEdges } from "../node/tails.js";

export const heads = async ({ id }: { id: string }) => {
  const operation = await prisma.operation.findUnique({
    include: {
      edges: {
        include: {
          from: true,
        },
      },
    },
    where: {
      id,
    },
  });

  if (operation === null) {
    throw new Error(`Operation not found: ${id}`);
  }

  const nodes = operation.edges.map((edge) => edge.from);

  const edges = await tailEdges({
    ids: nodes.map((node) => node.id),
    found: [],
  });

  return prisma.operation.findMany({
    where: {
      edges: {
        some: {
          id: {
            in: edges.map((edge) => edge.id),
          },
        },
      },
    },
  });
};

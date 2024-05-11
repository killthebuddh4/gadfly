import { prisma } from "../../../../lib/prisma.js";
import { heads as headEdges } from "../node/heads.js";

export const heads = async ({ ids }: { ids: string[] }) => {
  const operations = await prisma.operation.findMany({
    include: {
      edges: {
        include: {
          from: true,
        },
      },
    },
    where: {
      id: {
        in: ids,
      },
    },
  });

  const nodes = operations.flatMap((op) => op.edges.map((edge) => edge.from));

  const edges = await headEdges({
    ids: nodes.map((node) => node.id),
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

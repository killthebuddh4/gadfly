import { prisma } from "../../../../lib/prisma.js";
import { heads as headEdges } from "../node/heads.js";

export const heads = async ({ ids }: { ids: string[] }) => {
  const generations = await prisma.generation.findMany({
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

  const nodes = generations.flatMap((gen) =>
    gen.edges.map((edge) => edge.from),
  );

  const edges = await headEdges({
    ids: nodes.map((node) => node.id),
  });

  return prisma.generation.findMany({
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

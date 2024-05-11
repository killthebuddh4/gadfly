import { prisma } from "../../../../lib/prisma.js";
import { tails as tailEdges } from "../node/tails.js";

export const tails = async ({ ids }: { ids: string[] }) => {
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

  const edges = await tailEdges({
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

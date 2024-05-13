import { prisma } from "../../../../lib/prisma.js";
import { heads as headEdges } from "../node/heads.js";

export const heads = async ({ id }: { id: string }) => {
  const generation = await prisma.generation.findUnique({
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

  if (generation === null) {
    throw new Error(`Generation not found for id: ${id}`);
  }

  const nodes = generation.edges.map((edge) => edge.from);

  const edges = await Promise.all(
    nodes.map((node) => headEdges({ id: node.id })),
  );

  return prisma.generation.findMany({
    where: {
      edges: {
        some: {
          id: {
            in: edges.flatMap((edges) => edges.map((edge) => edge.id)),
          },
        },
      },
    },
  });
};

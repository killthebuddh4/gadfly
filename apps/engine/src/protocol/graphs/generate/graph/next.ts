import { prisma } from "../../../../lib/prisma.js";

export const next = async ({ id }: { id: string }) => {
  const graph = await prisma.graph.findUnique({
    include: {
      nodes: true,
    },
    where: {
      id,
    },
  });

  if (graph === null) {
    throw new Error(`Graph not found for id: ${id}`);
  }

  const options: string[] = [];

  if (graph.value_id === null) {
    options.push("POST /generate/graph/:id/value");
    return { options };
  }

  if (graph.nodes.length === 0) {
    options.push("POST /generate/graph/:id/tails");
  }

  return { options };
};

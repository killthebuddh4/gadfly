import { prisma } from "../../../../lib/prisma.js";

export const next = async ({ id }: { id: string }) => {
  const operation = await prisma.operation.findUnique({
    include: {
      edges: true,
    },
    where: {
      id,
    },
  });

  if (operation === null) {
    throw new Error(`Generation not found for id: ${id}`);
  }

  const options = [];

  if (operation.value_id === null) {
    options.push("POST /generate/operation/:id/value");
    return { options };
  }

  if (operation.edges.length === 0) {
    options.push("POST /generate/operation/:id/edges");
  }

  return { options };
};

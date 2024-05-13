import { prisma } from "../../../../lib/prisma.js";

export const next = async ({ id }: { id: string }) => {
  const node = await prisma.node.findUnique({
    include: {
      downstream: true,
    },
    where: {
      id,
    },
  });

  if (node === null) {
    throw new Error(`Node not found for id: ${id}`);
  }

  const options = [];

  if (node.value_id === null) {
    options.push("POST /generate/node/:id/value");
    return { options };
  }

  if (node.downstream.length === 0) {
    options.push("POST /generate/node/:id/operation");
  }

  return { options };
};

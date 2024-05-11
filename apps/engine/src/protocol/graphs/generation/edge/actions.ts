import { prisma } from "../../../../lib/prisma.js";

export const actions = async ({ id }: { id: string }) => {
  const edge = await prisma.edge.findUnique({
    where: {
      id,
    },
  });

  if (edge === null) {
    throw new Error(`Edge not found for id: ${id}`);
  }

  const options = [];

  if (edge.to_id === null) {
    options.push("POST /edge/:id/to");
  }

  if (edge.value_id === null) {
    options.push("POST /edge/:id/value");
  }

  return { options };
};

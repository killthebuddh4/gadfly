import { prisma } from "../../lib/prisma.js";

export const readPhases = async ({ id }: { id: string }) => {
  const machine = await prisma.machine.findUnique({
    include: {
      phases: true,
    },
    where: {
      id,
    },
  });

  if (machine === null) {
    throw new Error(`Machine not found: ${id}`);
  }

  return machine.phases;
};

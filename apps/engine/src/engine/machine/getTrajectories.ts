import { prisma } from "../../lib/prisma.js";

export const readTrajectories = async ({ id }: { id: string }) => {
  const machine = await prisma.machine.findUnique({
    include: {
      trajectories: true,
    },
    where: {
      id,
    },
  });

  if (machine === null) {
    throw new Error(`Machine not found: ${id}`);
  }

  return machine.trajectories;
};

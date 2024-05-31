import { prisma } from "../../lib/prisma.js";

export const getLeafStates = async ({ id }: { id: string }) => {
  const trajectory = await prisma.trajectory.findUnique({
    include: {
      states: true,
      transitions: true,
    },
    where: {
      id,
    },
  });

  if (trajectory === null) {
    throw new Error(`Trajectory not found: ${id}`);
  }

  return trajectory.states.filter((state) => {
    return trajectory.transitions.every((transition) => {
      return transition.from_id !== state.id;
    });
  });
};

import { prisma } from "../../lib/prisma.js";

export const getInitialState = async ({ id }: { id: string }) => {
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

  const initial = trajectory.states.filter((state) => {
    return trajectory.transitions.every((transition) => {
      return transition.to_id !== state.id;
    });
  });

  if (initial.length === 0) {
    return null;
  } else if (initial.length > 1) {
    throw new Error("Multiple initial states found");
  } else {
    return initial[0];
  }
};

import { prisma } from "../../lib/prisma.js";
import { getTerminalPhases } from "../machine/getTerminalPhases.js";

export const getTerminalStates = async ({ id }: { id: string }) => {
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

  const terminal = await getTerminalPhases({ id: trajectory.machine_id });

  return trajectory.states.filter((state) => {
    const terminalPhase = terminal.find((phase) => phase.id === state.phase_id);

    return terminalPhase !== undefined;
  });
};

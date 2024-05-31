import { prisma } from "../../lib/prisma.js";

export const getTerminalPhases = async ({ id }: { id: string }) => {
  const machine = await prisma.machine.findUnique({
    include: {
      phases: true,
      rules: true,
    },
    where: {
      id,
    },
  });

  if (machine === null) {
    throw new Error(`Machine not found: ${id}`);
  }

  const terminal = machine.phases.filter((phase) => {
    return machine.rules.every((rule) => {
      return rule.from_id !== phase.id;
    });
  });

  if (terminal.length === 0) {
    throw new Error("No terminal phases found");
  }

  return terminal;
};

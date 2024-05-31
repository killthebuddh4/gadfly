import { prisma } from "../../lib/prisma.js";

export const getInitialPhases = async ({ id }: { id: string }) => {
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

  const initial = machine.phases.filter((phase) => {
    return machine.rules.every((rule) => {
      return rule.to_id !== phase.id;
    });
  });

  if (initial.length === 0) {
    throw new Error("No initial phases found");
  }

  return initial;
};

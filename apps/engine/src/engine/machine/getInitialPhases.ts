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

  return machine.phases.filter((phase) => {
    return machine.rules.every((rule) => {
      return rule.to_id !== phase.id;
    });
  });
};

import { prisma } from "../../lib/prisma.js";

export const readRules = async ({ id }: { id: string }) => {
  const machine = await prisma.machine.findUnique({
    include: {
      rules: true,
    },
    where: {
      id,
    },
  });

  if (machine === null) {
    throw new Error(`Machine not found: ${id}`);
  }

  return machine.rules;
};

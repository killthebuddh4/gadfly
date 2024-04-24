import { prisma } from "../lib/prisma.js";

export const createVariable = async ({
  name,
  variant,
  type,
  input,
  output,
}: {
  name: string;
  variant: string;
  type: string;
  input: string;
  output: string;
}) => {
  const variable = await prisma.variable.create({
    data: {
      name,
      variant,
      type: { connect: { id: type } },
      input: { create: { actor: { connect: { id: input } } } },
      output: { create: { actor: { connect: { id: output } } } },
      sequence: { create: {} },
    },
  });

  return variable;
};

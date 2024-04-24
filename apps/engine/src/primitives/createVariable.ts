import { prisma } from "../lib/prisma.js";

export const createVariable = async ({
  name,
  role,
  input,
  output,
}: {
  name: string;
  role: string;
  input: string;
  output: string;
}) => {
  const variable = await prisma.variable.create({
    data: {
      name,
      role,
      input: { create: { type: role, actor: { connect: { id: input } } } },
      output: { create: { type: role, actor: { connect: { id: output } } } },
    },
  });

  return variable;
};

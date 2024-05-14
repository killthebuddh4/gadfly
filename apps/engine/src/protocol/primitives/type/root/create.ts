import { prisma } from "../../../../lib/prisma.js";

export const create = async ({
  code,
  description,
}: {
  code: number;
  description: string;
}) => {
  return prisma.type.create({
    data: {
      code,
      description,
    },
  });
};

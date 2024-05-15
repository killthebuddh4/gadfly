import { prisma } from "../../../../lib/prisma.js";

export const create = async ({
  url,
  description,
}: {
  url: string;
  description: string;
}) => {
  return prisma.type.create({
    data: {
      url,
      description,
    },
  });
};

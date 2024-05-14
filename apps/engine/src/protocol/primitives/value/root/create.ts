import { prisma } from "../../../../lib/prisma.js";

export const create = async ({
  value,
  type,
}: {
  value: string;
  type: string;
}) => {
  return prisma.value.create({
    data: {
      value,
      type: {
        connect: {
          id: type,
        },
      },
    },
  });
};

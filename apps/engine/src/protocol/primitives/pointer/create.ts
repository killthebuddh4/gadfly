import { prisma } from "../../../lib/prisma.js";

export const create = async ({
  from,
  type,
}: {
  from: string;
  type: string;
}) => {
  return prisma.pointer.create({
    data: {
      from: {
        connect: {
          id: from,
        },
      },
      type: {
        connect: {
          id: type,
        },
      },
    },
  });
};

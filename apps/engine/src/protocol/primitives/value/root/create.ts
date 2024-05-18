import { prisma } from "../../../../lib/prisma.js";

export const create = async ({
  type_id,
  value,
}: {
  type_id: string;
  value: string;
}) => {
  return prisma.value.create({
    data: {
      type: {
        connect: {
          id: type_id,
        },
      },
      value,
    },
  });
};

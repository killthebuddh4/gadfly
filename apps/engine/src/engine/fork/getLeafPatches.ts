import { prisma } from "../../lib/prisma.js";

export const getLeafPatches = async ({ id }: { id: string }) => {
  return prisma.patch.findMany({
    where: {
      to: {
        downstream: {
          none: {},
        },
      },
    },
  });
};

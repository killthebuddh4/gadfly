import { prisma } from "../../lib/prisma.js";

export const getRootPatches = async ({ id }: { id: string }) => {
  return prisma.patch.findMany({
    where: {
      fork_id: id,
      from: {
        fork_id: {
          not: id,
        },
      },
    },
  });
};

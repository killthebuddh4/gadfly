import { prisma } from "../../lib/prisma.js";

export const getMergePatches = async ({ id }: { id: string }) => {
  return prisma.patch.findMany({
    where: {
      fork_id: id,
      to: {
        fork_id: {
          not: id,
        },
      },
    },
  });
};

import { prisma } from "../../lib/prisma.js";

export const getMergePatch = async ({ id }: { id: string }) => {
  const mergePatches = await prisma.patch.findMany({
    where: {
      branch_id: id,
      to: {
        branch_id: {
          not: id,
        },
      },
    },
  });

  if (mergePatches.length === 0) {
    return null;
  }

  if (mergePatches.length > 1) {
    throw new Error(`Multiple merge patches found for branch: ${id}`);
  }

  return mergePatches[0];
};

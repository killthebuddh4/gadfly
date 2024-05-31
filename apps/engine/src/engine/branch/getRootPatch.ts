import { prisma } from "../../lib/prisma.js";

export const getRootPatch = async ({ id }: { id: string }) => {
  const rootPatches = await prisma.patch.findMany({
    where: {
      branch_id: id,
      from: {
        branch_id: {
          not: id,
        },
      },
    },
  });

  if (rootPatches.length > 1) {
    throw new Error(`Multiple root patches found for branch: ${id}`);
  }

  if (rootPatches.length === 0) {
    return null;
  }

  return rootPatches[0];
};

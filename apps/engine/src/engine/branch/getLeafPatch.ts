import { prisma } from "../../lib/prisma.js";

export const getLeafPatch = async ({ id }: { id: string }) => {
  const leafPatches = await prisma.patch.findMany({
    where: {
      to: {
        downstream: {
          none: {},
        },
      },
    },
  });

  if (leafPatches.length > 1) {
    throw new Error(`Multiple leaf patches found for branch: ${id}`);
  }

  if (leafPatches.length === 0) {
    return null;
  }

  return leafPatches[0];
};

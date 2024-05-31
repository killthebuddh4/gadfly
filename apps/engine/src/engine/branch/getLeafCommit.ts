import { prisma } from "../../lib/prisma.js";

export const getLeafCommit = async ({ id }: { id: string }) => {
  const leafCommits = await prisma.commit.findMany({
    where: {
      branch_id: id,
      downstream: {
        none: {},
      },
    },
  });

  if (leafCommits.length > 1) {
    throw new Error(`Multiple leaf commits found for branch: ${id}`);
  }

  if (leafCommits.length === 0) {
    return null;
  }

  return leafCommits[0];
};

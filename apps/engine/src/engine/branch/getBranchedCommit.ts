import { prisma } from "../../lib/prisma.js";

export const getBranchedCommit = async ({ id }: { id: string }) => {
  const branchedCommits = await prisma.commit.findMany({
    where: {
      branch_id: {
        not: id,
      },
      downstream: {
        some: {
          branch_id: id,
        },
      },
    },
  });

  if (branchedCommits.length > 1) {
    throw new Error(`Multiple branched commits found: ${id}`);
  }

  if (branchedCommits.length === 0) {
    return null;
  }

  return branchedCommits[0];
};

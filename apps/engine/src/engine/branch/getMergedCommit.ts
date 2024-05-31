import { prisma } from "../../lib/prisma.js";

export const getMergedCommit = async ({ id }: { id: string }) => {
  const mergedCommits = await prisma.commit.findMany({
    where: {
      branch_id: {
        not: id,
      },
      upstream: {
        every: {
          branch_id: id,
        },
      },
    },
  });

  if (mergedCommits.length > 1) {
    throw new Error(`Multiple merged commits found: ${id}`);
  }

  if (mergedCommits.length === 0) {
    return null;
  }

  return mergedCommits[0];
};

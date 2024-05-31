import { prisma } from "../../lib/prisma.js";

export const getForkedCommit = async ({ id }: { id: string }) => {
  const forkedCommits = await prisma.commit.findMany({
    where: {
      fork_id: {
        not: id,
      },
      downstream: {
        some: {
          fork_id: id,
        },
      },
    },
  });

  if (forkedCommits.length > 1) {
    throw new Error(`Multiple forked commits found: ${id}`);
  }

  if (forkedCommits.length === 0) {
    return null;
  }

  return forkedCommits[0];
};

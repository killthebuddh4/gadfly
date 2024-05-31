import { prisma } from "../../lib/prisma.js";

export const getLeafCommits = async ({ id }: { id: string }) => {
  return prisma.commit.findMany({
    where: {
      fork_id: id,
      downstream: {
        none: {},
      },
    },
  });
};

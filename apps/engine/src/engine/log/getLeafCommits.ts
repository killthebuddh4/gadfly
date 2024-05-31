import { prisma } from "../../lib/prisma.js";

export const getLeafCommits = async ({ id }: { id: string }) => {
  return prisma.commit.findMany({
    where: {
      log_id: id,
      downstream: {
        none: {},
      },
    },
  });
};

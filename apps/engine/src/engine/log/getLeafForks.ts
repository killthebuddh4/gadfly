import { prisma } from "../../lib/prisma.js";

export const getLeafForks = async ({ id }: { id: string }) => {
  return prisma.fork.findMany({
    where: {
      log_id: id,
      commits: {
        every: {
          downstream: {
            none: {
              to: {
                log_id: {
                  not: id,
                },
              },
            },
          },
        },
      },
    },
  });
};

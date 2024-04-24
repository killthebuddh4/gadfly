import { prisma } from "../lib/prisma.js";

export const createWrite = async ({
  sequenceId,
  mutation,
}: {
  sequenceId: string;
  mutation: string;
}) => {
  return prisma.operation.create({
    data: {
      type: "write",
      argument: {
        create: {
          value: { create: {} },
        },
      },

      mutation: {
        create: {
          signal: {
            create: {
              text: mutation,
            },
          },
        },
      },

      result: {
        create: {
          value: {
            create: {
              signals: {
                create: [{ text: mutation }],
              },
            },
          },
        },
      },

      sequence: {
        connect: {
          id: sequenceId,
        },
      },
    },
  });
};

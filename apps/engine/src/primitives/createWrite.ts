import { prisma } from "../lib/prisma.js";

export const createWrite = async ({
  variableId,
  mutation,
}: {
  variableId: string;
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

      variable: {
        connect: {
          id: variableId,
        },
      },
    },
  });
};

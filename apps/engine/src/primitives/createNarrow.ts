import { prisma } from "../lib/prisma.js";

export const createNarrow = async ({
  variableId,
  mutation,
}: {
  variableId: string;
  mutation: string;
}) => {
  const variable = await prisma.variable.findUnique({
    where: { id: variableId },
  });

  if (variable === null) {
    throw new Error(`Variable with id ${variableId} not found`);
  }

  // Get the operations where the result has not been used as an argument.
  // I.e. get the last operation.  There should only ever be exactly 0 or 1
  // of these operations.
  const heads = await prisma.operation.findMany({
    include: {
      result: {
        include: {
          value: {
            include: {
              signals: true,
            },
          },
        },
      },
    },
    where: {
      variable: {
        id: variableId,
      },
      result: {
        value: {
          argument: {
            none: {},
          },
        },
      },
    },
  });

  if (heads.length === 0) {
    throw new Error(
      `No head operation found for variable with id ${variableId}`,
    );
  }

  if (heads.length > 1) {
    throw new Error(
      `More than one head found for variable with id ${variableId}`,
    );
  }

  const head = heads[0];

  // We use a join table for operation results, so if we screw that up the result will be null.
  // But no operation should ever have a null result (unless it's in progress, I guess).
  if (head.result === null) {
    throw new Error(`Head operation with id ${head.id} has null result`);
  }

  return prisma.operation.create({
    data: {
      type: "narrow",
      variable: {
        connect: {
          id: variableId,
        },
      },
      argument: {
        create: {
          value: {
            connect: {
              id: head.result.value.id,
            },
          },
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
                create: [
                  ...head.result.value.signals.map(({ text }) => ({ text })),
                  { text: mutation },
                ],
              },
            },
          },
        },
      },
    },
  });
};

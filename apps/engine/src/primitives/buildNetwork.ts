import { prisma } from "../lib/prisma.js";
import { createNarrowing } from "./createNarrowing.js";
import { operationToString } from "./operationToString.js";

export const buildNetwork = async () => {
  const network = await prisma.network.create({
    data: {
      name: "Test Network",
    },
  });

  const variable = await prisma.variable.create({
    include: {
      input: {
        include: {
          actor: true,
        },
      },
      output: {
        include: {
          actor: true,
        },
      },
    },
    data: {
      name: "Test Variable",
      role: "DEPRECATED",
      input: {
        create: {
          type: "parent",
          actor: {
            create: {
              network_id: network.id,
            },
          },
        },
      },
      output: {
        create: {
          type: "child",
          actor: {
            create: {
              network_id: network.id,
            },
          },
        },
      },
    },
  });

  await prisma.operation.create({
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
              text: "Socrates is a man.",
            },
          },
        },
      },

      result: {
        create: {
          value: {
            create: {
              signals: {
                create: [{ text: "Socrates is a man." }],
              },
            },
          },
        },
      },

      variable: {
        connect: {
          id: variable.id,
        },
      },
    },
  });

  await createNarrowing({
    variableId: variable.id,
    mutation: "All men are mortal",
  });

  const history = await prisma.operation.findMany({
    include: {
      argument: {
        include: {
          value: {
            include: {
              signals: true,
            },
          },
        },
      },
      mutation: {
        include: {
          signal: true,
        },
      },
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
      variable_id: variable.id,
    },
  });

  console.log(
    history.map((op) => operationToString({ operation: op })).join("\n"),
  );

  return network;
};

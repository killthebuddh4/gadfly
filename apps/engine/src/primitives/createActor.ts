import { prisma } from "../lib/prisma.js";

export const createActor = async ({
  name,
  description,
  inputs,
  outputs,
  constraints,
}: {
  name: string;
  description: string;
  inputs: string[];
  outputs: string[];
  constraints: string[];
}) => {
  const actor = await prisma.actor.create({});

  const specNameLog = await prisma.actorLog.create({
    data: {
      actor: {
        connect: {
          id: actor.id,
        },
      },
      log: {
        create: {
          description: name,
        },
      },
      type: "SPEC_NAME",
    },
  });

  const specDescriptionLog = await prisma.actorLog.create({
    data: {
      actor: {
        connect: {
          id: actor.id,
        },
      },
      log: {
        create: {
          description,
        },
      },
      type: "SPEC_DESCRIPTION",
    },
  });

  const specInputsLogs = await Promise.all(
    inputs.map((input) => {
      return prisma.actorLog.create({
        data: {
          actor: {
            connect: {
              id: actor.id,
            },
          },
          log: {
            create: {
              description: input,
            },
          },
          type: "SPEC_INPUT",
        },
      });
    }),
  );

  const specOutputsLogs = await Promise.all(
    outputs.map((output) => {
      return prisma.actorLog.create({
        data: {
          actor: {
            connect: {
              id: actor.id,
            },
          },
          log: {
            create: {
              description: output,
            },
          },
          type: "SPEC_OUTPUT",
        },
      });
    }),
  );

  const specConstraintsLogs = await Promise.all(
    constraints.map((constraint) => {
      return prisma.actorLog.create({
        data: {
          actor: {
            connect: {
              id: actor.id,
            },
          },
          log: {
            create: {
              description: constraint,
            },
          },
          type: "SPEC_CONSTRAINT",
        },
      });
    }),
  );

  const inputsLogs = await Promise.all(
    inputs.map(async (input) => {
      return prisma.actorLog.create({
        data: {
          actor: {
            connect: {
              id: actor.id,
            },
          },
          log: {
            create: {
              description: input,
            },
          },
          type: "INPUT",
        },
      });
    }),
  );

  const outputsLogs = await Promise.all(
    outputs.map(async (output) => {
      return prisma.actorLog.create({
        data: {
          actor: {
            connect: {
              id: actor.id,
            },
          },
          log: {
            create: {
              description: output,
            },
          },
          type: "OUTPUT",
        },
      });
    }),
  );

  const feedbackLog = await prisma.actorLog.create({
    data: {
      actor: {
        connect: {
          id: actor.id,
        },
      },
      log: {
        create: {
          description: "",
        },
      },
      type: "FEEDBACK",
    },
  });

  const describe = async () => {
    const nameSpec = await prisma.signal.findMany({
      where: {
        log: {
          id: specNameLog.id,
        },
      },
      orderBy: {
        index: "desc",
      },
      skip: 0,
      take: 1,
    });

    const descriptionSpec = await prisma.signal.findMany({
      where: {
        log: {
          id: specDescriptionLog.id,
        },
      },
      orderBy: {
        index: "desc",
      },
      skip: 0,
      take: 1,
    });

    const inputsSpecs = await Promise.all(
      specInputsLogs.map(async (inputLog) => {
        return prisma.signal.findMany({
          where: {
            log: {
              id: inputLog.id,
            },
          },
          orderBy: {
            index: "desc",
          },
          skip: 0,
          take: 1,
        });
      }),
    );

    const outputsSpecs = await Promise.all(
      specOutputsLogs.map(async (outputLog) => {
        return prisma.signal.findMany({
          where: {
            log: {
              id: outputLog.id,
            },
          },
          orderBy: {
            index: "desc",
          },
          skip: 0,
          take: 1,
        });
      }),
    );

    const constraintsSpecs = await Promise.all(
      specConstraintsLogs.map(async (constraintLog) => {
        return prisma.signal.findMany({
          where: {
            log: {
              id: constraintLog.id,
            },
          },
          orderBy: {
            index: "desc",
          },
          skip: 0,
          take: 1,
        });
      }),
    );

    return {
      name: nameSpec[0],
      description: descriptionSpec[0],
      inputs: inputsSpecs.map((input) => input[0]),
      outputs: outputsSpecs.map((output) => output[0]),
      constraints: constraintsSpecs.map((constraint) => constraint[0]),
    };
  };

  const exec = async (
    args: Partial<{
      name: string;
      description: string;
      inputs: string[];
      outputs: string[];
      constraints: string[];
    }>,
  ) => {
    if (args.name !== undefined) {
      await prisma.signal.create({
        data: {
          log: {
            connect: {
              id: specNameLog.id,
            },
          },
          text: args.name,
        },
      });
    }

    if (args.description !== undefined) {
      await prisma.signal.create({
        data: {
          log: {
            connect: {
              id: specDescriptionLog.id,
            },
          },
          text: args.description,
        },
      });
    }

    if (args.inputs !== undefined) {
      await Promise.all(
        args.inputs.map(async (input, index) => {
          await prisma.signal.create({
            data: {
              log: {
                connect: {
                  id: specInputsLogs[index].id,
                },
              },
              text: input,
            },
          });
        }),
      );
    }

    if (args.outputs !== undefined) {
      await Promise.all(
        args.outputs.map(async (output, index) => {
          await prisma.signal.create({
            data: {
              log: {
                connect: {
                  id: specOutputsLogs[index].id,
                },
              },
              text: output,
            },
          });
        }),
      );
    }

    if (args.constraints !== undefined) {
      await Promise.all(
        args.constraints.map(async (constraint, index) => {
          await prisma.signal.create({
            data: {
              log: {
                connect: {
                  id: specConstraintsLogs[index].id,
                },
              },
              text: constraint,
            },
          });
        }),
      );
    }
  };

  const patch = async (args: { feedback: string }) => {
    await prisma.signal.create({
      data: {
        log: {
          connect: {
            id: feedbackLog.id,
          },
        },
        text: args.feedback,
      },
    });
  };

  const call = async (args: { inputs: string[] }) => {
    return { id: "NOT YET IMPLEMENTED" };
  };

  const history = async () => {
    return prisma.image.findMany({
      where: {
        actor: {
          id: actor.id,
        },
      },
    });
  };

  return {
    id: async () => actor.id,
    describe,
    exec,
    patch,
    call,
    history,
  };
};

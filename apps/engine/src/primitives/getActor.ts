import { prisma } from "../lib/prisma.js";

export const getActor = async ({ id }: { id: string }) => {
  const actor = await prisma.actor.findUnique({
    where: {
      id,
    },
  });

  if (actor === null) {
    throw new Error(`Actor not found: ${id}`);
  }

  const specNameLog = await prisma.actorLog.findFirst({
    where: {
      actor: {
        id: actor.id,
      },
      type: "SPEC_NAME",
    },
  });

  if (specNameLog === null) {
    throw new Error(`Actor name not found: ${id}`);
  }

  const specDescriptionLog = await prisma.actorLog.findFirst({
    where: {
      actor: {
        id: actor.id,
      },
      type: "SPEC_DESCRIPTION",
    },
  });

  if (specDescriptionLog === null) {
    throw new Error(`Actor description not found: ${id}`);
  }

  const specInputsLogs = await prisma.actorLog.findMany({
    where: {
      actor: {
        id: actor.id,
      },
      type: "SPEC_INPUT",
    },
  });

  if (specInputsLogs.length === 0) {
    throw new Error(`Actor inputs not found: ${id}`);
  }

  const specOutputsLogs = await prisma.actorLog.findMany({
    where: {
      actor: {
        id: actor.id,
      },
      type: "SPEC_OUTPUT",
    },
  });

  if (specOutputsLogs.length === 0) {
    throw new Error(`Actor outputs not found: ${id}`);
  }

  const specConstraintsLogs = await prisma.actorLog.findMany({
    where: {
      actor: {
        id: actor.id,
      },
      type: "SPEC_CONSTRAINT",
    },
  });

  if (specConstraintsLogs.length === 0) {
    throw new Error(`Actor constraints not found: ${id}`);
  }

  const inputsLogs = await prisma.actorLog.findMany({
    where: {
      actor: {
        id: actor.id,
      },
      type: "SPEC_INPUT",
    },
  });

  const outputsLogs = await prisma.actorLog.findMany({
    where: {
      actor: {
        id: actor.id,
      },
      type: "SPEC_OUTPUT",
    },
  });

  const feedbackLog = await prisma.actorLog.findFirst({
    where: {
      actor: {
        id: actor.id,
      },
      type: "FEEDBACK",
    },
  });

  if (feedbackLog === null) {
    throw new Error(`Actor feedback not found: ${id}`);
  }

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

import { prisma } from "../lib/prisma.js";
import { openai } from "../lib/openai/openai.js";

export const getActor = async ({ id }: { id: string }) => {
  const actor = await prisma.actor.findUnique({ where: { id } });

  if (actor === null) {
    throw new Error(`Actor not found: ${id}`);
  }

  const specNameLog = await prisma.log.findFirst({
    where: {
      actors: {
        some: {
          actor: {
            id,
          },
          type: "SPEC_NAME",
        },
      },
    },
  });

  if (specNameLog === null) {
    throw new Error(`Actor spec name not found: ${id}`);
  }

  const specDescriptionLog = await prisma.log.findFirst({
    where: {
      actors: {
        some: {
          actor: {
            id,
          },
          type: "SPEC_DESCRIPTION",
        },
      },
    },
  });

  if (specDescriptionLog === null) {
    throw new Error(`Actor spec description not found: ${id}`);
  }

  const specInputsLogs = await prisma.log.findMany({
    where: {
      actors: {
        some: {
          actor: {
            id,
          },
          type: "SPEC_INPUT",
        },
      },
    },
  });

  const specOutputsLogs = await prisma.log.findMany({
    where: {
      actors: {
        some: {
          actor: {
            id,
          },
          type: "SPEC_OUTPUT",
        },
      },
    },
  });

  const specConstraintsLogs = await prisma.log.findMany({
    where: {
      actors: {
        some: {
          actor: {
            id,
          },
          type: "SPEC_CONSTRAINT",
        },
      },
    },
  });

  const inputsLogs = await prisma.log.findMany({
    where: {
      actors: {
        some: {
          actor: {
            id,
          },
          type: "INPUT",
        },
      },
    },
  });

  const outputsLogs = await prisma.log.findMany({
    where: {
      actors: {
        some: {
          actor: {
            id,
          },
          type: "OUTPUT",
        },
      },
    },
  });

  const feedbackLog = await prisma.log.findFirst({
    where: {
      actors: {
        some: {
          actor: {
            id,
          },
          type: "FEEDBACK",
        },
      },
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
      specInputsLogs.map((inputLog) => {
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
      specOutputsLogs.map((outputLog) => {
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
      specConstraintsLogs.map((constraintLog) => {
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
      id: actor.id,
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
        args.inputs.map((input, index) => {
          return prisma.signal.create({
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
        args.outputs.map((output, index) => {
          return prisma.signal.create({
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
        args.constraints.map((constraint, index) => {
          return prisma.signal.create({
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

  const call = async () => {
    const spec = await describe();

    const system = `
${spec.description.text}

${spec.inputs.map((input) => input.text).join("\n")}

${spec.outputs.map((output) => output.text).join("\n")}

${spec.constraints.map((constraint) => constraint.text).join("\n")}
    `;

    const inputs = await Promise.all(
      inputsLogs.map((inputLog) => {
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

    const text = inputs.map((input) => input[0].text).join("\n");

    console.log("SYSTEM PROMPT");
    console.log(system);
    console.log("USER PROMPT");
    console.log(text);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: system,
        },
        {
          role: "user",
          content: text,
        },
      ],
    });

    const output = response.choices[0].message.content;

    if (typeof output !== "string") {
      throw new Error(`Expected string, got: ${typeof output}`);
    }

    console.log("RESPONSE TEXT");
    console.log(output);

    const image = await prisma.image.create({
      data: {
        actor: {
          connect: {
            id: actor.id,
          },
        },
      },
    });

    await prisma.imageSignal.create({
      data: {
        image: {
          connect: {
            id: image.id,
          },
        },
        signal: {
          connect: {
            id: spec.name.id,
          },
        },
        type: "SPEC_NAME",
      },
    });

    await prisma.imageSignal.create({
      data: {
        image: {
          connect: {
            id: image.id,
          },
        },
        signal: {
          connect: {
            id: spec.description.id,
          },
        },
        type: "SPEC_DESCRIPTION",
      },
    });

    await Promise.all(
      spec.inputs.map((input) => {
        return prisma.imageSignal.create({
          data: {
            image: {
              connect: {
                id: image.id,
              },
            },
            signal: {
              connect: {
                id: input.id,
              },
            },
            type: "SPEC_INPUT",
          },
        });
      }),
    );

    await Promise.all(
      spec.outputs.map((output) => {
        return prisma.imageSignal.create({
          data: {
            image: {
              connect: {
                id: image.id,
              },
            },
            signal: {
              connect: {
                id: output.id,
              },
            },
            type: "SPEC_OUTPUT",
          },
        });
      }),
    );

    await Promise.all(
      spec.constraints.map((constraint) => {
        return prisma.imageSignal.create({
          data: {
            image: {
              connect: {
                id: image.id,
              },
            },
            signal: {
              connect: {
                id: constraint.id,
              },
            },
            type: "SPEC_CONSTRAINT",
          },
        });
      }),
    );

    await prisma.imageSignal.create({
      data: {
        image: {
          connect: {
            id: image.id,
          },
        },
        signal: {
          connect: {
            id: feedbackLog.id,
          },
        },
        type: "FEEDBACK",
      },
    });

    await Promise.all(
      inputs.map((input) => {
        return prisma.imageSignal.create({
          data: {
            image: {
              connect: {
                id: image.id,
              },
            },
            signal: {
              connect: {
                id: input[0].id,
              },
            },
            type: "INPUT",
          },
        });
      }),
    );

    await prisma.imageSignal.create({
      data: {
        image: {
          connect: {
            id: image.id,
          },
        },
        signal: {
          create: {
          

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

const computePrompt = (args: {
  spec: {
    name: string;
    description: string;
    inputs: string[];
    outputs: string[];
    constraints: string[];
  };
  inputs: string[];
}) => {
  return "";
};

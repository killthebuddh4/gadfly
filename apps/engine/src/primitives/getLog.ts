import { Signal } from "../protocol/network/Signal.js";
import { Log } from "../protocol/network/Log.js";
import { prisma } from "../lib/prisma.js";

export const getLog = async (args: { id: string }) => {
  const log = await prisma.log.findUnique({ where: { id: args.id } });

  if (log === null) {
    throw new Error(`Log not found: ${args.id}`);
  }

  const id = async () => {
    return log.id;
  };

  const description = async () => {
    return log.description;
  };

  const attached = async () => {
    return prisma.attachedLog.findMany({
      where: { source_log: { id: log.id } },
    });
  };

  const attach = async (args: { log: Log }) => {
    const attachedLog = await prisma.attachedLog.create({
      data: {
        source_log: {
          connect: {
            id: log.id,
          },
        },
        sink_log: {
          connect: {
            id: await args.log.id(),
          },
        },
      },
    });

    return {
      detach: async () => {
        await prisma.attachedLog.delete({ where: { id: attachedLog.id } });
      },
    };
  };

  const read = async () => {
    return prisma.signal.findMany({ where: { log: { id: log.id } } });
  };

  const append = async (args: { text: string }) => {
    await prisma.signal.create({
      data: {
        log: {
          connect: {
            id: log.id,
          },
        },
        text: args.text,
      },
    });

    const sinks = await attached();

    for (const sink of sinks) {
      await prisma.signal.create({
        data: {
          log: {
            connect: {
              id: sink.sink_log_id,
            },
          },
          text: args.text,
        },
      });
    }
  };

  return {
    id,
    description,
    read,
    append,
    attached,
    attach,
  };
};

import * as express from "express";
import { prisma } from "../../lib/prisma.js";
import { createReadHandler } from "../../lib/api/createReadHandler.js";
import { createWriteHandler } from "../../lib/api/createWriteHandler.js";
import { api } from "./api.js";

export const router = express.Router();

router.use(express.json());

createWriteHandler(api.type.create)({
  router,
  handler: async ({ data }) => {
    return prisma.type.create({
      data,
    });
  },
});

createReadHandler(api.type.read)({
  router,
  handler: async ({ query }) => {
    return prisma.type.findUnique({
      where: query,
    });
  },
});

createReadHandler(api.type.values.read)({
  router,
  handler: async ({ query }) => {
    const type = await prisma.type.findUnique({
      include: {
        values: true,
      },
      where: query,
    });

    if (type === null) {
      throw new Error("Type not found");
    }

    return type.values;
  },
});

createReadHandler(api.type.logs.read)({
  router,
  handler: async ({ query }) => {
    const type = await prisma.type.findUnique({
      include: {
        logs: true,
      },
      where: query,
    });

    if (type === null) {
      throw new Error("Type not found");
    }

    return type.logs;
  },
});

createReadHandler(api.type.forks.read)({
  router,
  handler: async ({ query }) => {
    const type = await prisma.type.findUnique({
      include: {
        forks: true,
      },
      where: query,
    });

    if (type === null) {
      throw new Error("Type not found");
    }

    return type.forks;
  },
});

createReadHandler(api.type.branches.read)({
  router,
  handler: async ({ query }) => {
    const type = await prisma.type.findUnique({
      include: {
        branches: true,
      },
      where: query,
    });

    if (type === null) {
      throw new Error("Type not found");
    }

    return type.branches;
  },
});

createReadHandler(api.type.commits.read)({
  router,
  handler: async ({ query }) => {
    const type = await prisma.type.findUnique({
      include: {
        commits: true,
      },
      where: query,
    });

    if (type === null) {
      throw new Error("Type not found");
    }

    return type.commits;
  },
});

createReadHandler(api.type.patches.read)({
  router,
  handler: async ({ query }) => {
    const type = await prisma.type.findUnique({
      include: {
        patches: true,
      },
      where: query,
    });

    if (type === null) {
      throw new Error("Type not found");
    }

    return type.patches;
  },
});

createReadHandler(api.type.machines.read)({
  router,
  handler: async ({ query }) => {
    const type = await prisma.type.findUnique({
      include: {
        machines: true,
      },
      where: query,
    });

    if (type === null) {
      throw new Error("Type not found");
    }

    return type.machines;
  },
});

createReadHandler(api.type.states.read)({
  router,
  handler: async ({ query }) => {
    const type = await prisma.type.findUnique({
      include: {
        states: true,
      },
      where: query,
    });

    if (type === null) {
      throw new Error("Type not found");
    }

    return type.states;
  },
});

createReadHandler(api.type.transitions.read)({
  router,
  handler: async ({ query }) => {
    const type = await prisma.type.findUnique({
      include: {
        transitions: true,
      },
      where: query,
    });

    if (type === null) {
      throw new Error("Type not found");
    }

    return type.transitions;
  },
});

createReadHandler(api.type.trajectories.read)({
  router,
  handler: async ({ query }) => {
    const type = await prisma.type.findUnique({
      include: {
        trajectories: true,
      },
      where: query,
    });

    if (type === null) {
      throw new Error("Type not found");
    }

    return type.trajectories;
  },
});

createReadHandler(api.type.phases.read)({
  router,
  handler: async ({ query }) => {
    const type = await prisma.type.findUnique({
      include: {
        phases: true,
      },
      where: query,
    });

    if (type === null) {
      throw new Error("Type not found");
    }

    return type.phases;
  },
});

createReadHandler(api.type.signals.read)({
  router,
  handler: async ({ query }) => {
    const type = await prisma.type.findUnique({
      include: {
        signals: true,
      },
      where: query,
    });

    if (type === null) {
      throw new Error("Type not found");
    }

    return type.signals;
  },
});

createWriteHandler(api.value.create)({
  router,
  handler: async ({ data }) => {
    return prisma.value.create({
      data,
    });
  },
});

createReadHandler(api.value.read)({
  router,
  handler: async ({ query }) => {
    return prisma.value.findUnique({
      where: query,
    });
  },
});

createReadHandler(api.value.type.read)({
  router,
  handler: async ({ query }) => {
    const value = await prisma.value.findUnique({
      include: {
        type: true,
      },
      where: query,
    });

    if (value === null) {
      throw new Error("Value not found");
    }

    return value.type;
  },
});

createReadHandler(api.value.value.read)({
  router,
  handler: async ({ query }) => {
    const value = await prisma.value.findUnique({
      where: query,
    });

    if (value === null) {
      throw new Error("Value not found");
    }

    return value.value;
  },
});

createReadHandler(api.value.log.read)({
  router,
  handler: async ({ query }) => {
    const value = await prisma.value.findUnique({
      include: {
        log: true,
      },
      where: query,
    });

    if (value === null) {
      throw new Error("Value not found");
    }

    return value.log;
  },
});

createReadHandler(api.value.fork.read)({
  router,
  handler: async ({ query }) => {
    const value = await prisma.value.findUnique({
      include: {
        fork: true,
      },
      where: query,
    });

    if (value === null) {
      throw new Error("Value not found");
    }

    return value.fork;
  },
});

createReadHandler(api.value.branch.read)({
  router,
  handler: async ({ query }) => {
    const value = await prisma.value.findUnique({
      include: {
        branch: true,
      },
      where: query,
    });

    if (value === null) {
      throw new Error("Value not found");
    }

    return value.branch;
  },
});

createReadHandler(api.value.commit.read)({
  router,
  handler: async ({ query }) => {
    const value = await prisma.value.findUnique({
      include: {
        commit: true,
      },
      where: query,
    });

    if (value === null) {
      throw new Error("Value not found");
    }

    return value.commit;
  },
});

createReadHandler(api.value.patch.read)({
  router,
  handler: async ({ query }) => {
    const value = await prisma.value.findUnique({
      include: {
        patch: true,
      },
      where: query,
    });

    if (value === null) {
      throw new Error("Value not found");
    }

    return value.patch;
  },
});

createReadHandler(api.value.machine.read)({
  router,
  handler: async ({ query }) => {
    const value = await prisma.value.findUnique({
      include: {
        machine: true,
      },
      where: query,
    });

    if (value === null) {
      throw new Error("Value not found");
    }

    return value.machine;
  },
});

createReadHandler(api.value.state.read)({
  router,
  handler: async ({ query }) => {
    const value = await prisma.value.findUnique({
      include: {
        state: true,
      },
      where: query,
    });

    if (value === null) {
      throw new Error("Value not found");
    }

    return value.state;
  },
});

createReadHandler(api.value.transition.read)({
  router,
  handler: async ({ query }) => {
    const value = await prisma.value.findUnique({
      include: {
        transition: true,
      },
      where: query,
    });

    if (value === null) {
      throw new Error("Value not found");
    }

    return value.transition;
  },
});

createReadHandler(api.value.trajectory.read)({
  router,
  handler: async ({ query }) => {
    const value = await prisma.value.findUnique({
      include: {
        trajectory: true,
      },
      where: query,
    });

    if (value === null) {
      throw new Error("Value not found");
    }

    return value.trajectory;
  },
});

createReadHandler(api.value.phase.read)({
  router,
  handler: async ({ query }) => {
    const value = await prisma.value.findUnique({
      include: {
        phase: true,
      },
      where: query,
    });

    if (value === null) {
      throw new Error("Value not found");
    }

    return value.phase;
  },
});

createReadHandler(api.value.signal.read)({
  router,
  handler: async ({ query }) => {
    const value = await prisma.value.findUnique({
      include: {
        signal: true,
      },
      where: query,
    });

    if (value === null) {
      throw new Error("Value not found");
    }

    return value.signal;
  },
});

createWriteHandler(api.log.create)({
  router,
  handler: async ({ data }) => {
    return prisma.log.create({
      data,
    });
  },
});

createReadHandler(api.log.read)({
  router,
  handler: async ({ query }) => {
    return prisma.log.findUnique({
      where: query,
    });
  },
});

createReadHandler(api.log.type.read)({
  router,
  handler: async ({ query }) => {
    const log = await prisma.log.findUnique({
      include: {
        type: true,
      },
      where: query,
    });

    if (log === null) {
      throw new Error("Log not found");
    }

    return log.type;
  },
});

createReadHandler(api.log.value.read)({
  router,
  handler: async ({ query }) => {
    const log = await prisma.log.findUnique({
      include: {
        value: true,
      },
      where: query,
    });

    if (log === null) {
      throw new Error("Log not found");
    }

    return log.value;
  },
});

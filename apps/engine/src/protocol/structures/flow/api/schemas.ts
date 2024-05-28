import { z } from "zod";
import { schemas as apiSchemas } from "../../../primitives/api/schemas.js";

export const schemas = {
  create: {
    path: "/",
    data: apiSchemas.zGraph,
  },
  read: {
    path: "/",
    query: z.object({ id: z.string().uuid() }),
    data: apiSchemas.zGraph.or(z.null()),
  },
  state: {
    read: {
      path: "/state",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zNode.or(z.null()),
    },
    create: {
      path: "/state",
      data: apiSchemas.zNode,
    },
  },
  states: {
    read: {
      path: "/states",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zNode),
    },
  },
  channel: {
    read: {
      path: "/channel",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zEdge.or(z.null()),
    },
    create: {
      path: "/channel",
      data: apiSchemas.zEdge,
    },
  },
  channels: {
    read: {
      path: "/channels",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zEdge),
    },
  },
  heads: {
    read: {
      path: "/heads",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zNode),
    },
  },
  tails: {
    read: {
      path: "/tails",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zNode),
    },
  },
};

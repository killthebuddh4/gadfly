import { z } from "zod";
import { schemas as apiSchemas } from "../../../../primitives/api/schemas.js";

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
  search: {
    read: {
      path: "/search",
      query: z.object({ query: z.string() }),
      data: z.array(apiSchemas.zGraph),
    },
  },
  context: {
    read: {
      path: "/context",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zNode.or(z.null()),
    },
    create: {
      path: "/context",
      data: apiSchemas.zNode,
    },
  },
  contexts: {
    read: {
      path: "/contexts",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zNode),
    },
  },
  signal: {
    read: {
      path: "/signal",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zEdge.or(z.null()),
    },
    create: {
      path: "/signal",
      data: apiSchemas.zEdge,
    },
  },
  signals: {
    read: {
      path: "/signals",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zEdge),
    },
  },
  terminal: {
    read: {
      path: "/terminal",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zNode.or(z.null()),
    },
  },
  initial: {
    read: {
      path: "/initial",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zNode.or(z.null()),
    },
  },
};

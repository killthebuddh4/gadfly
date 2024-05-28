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
  phase: {
    read: {
      path: "/phase",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zNode.or(z.null()),
    },
    create: {
      path: "/phase",
      data: apiSchemas.zNode,
    },
  },
  phases: {
    read: {
      path: "/phases",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zNode),
    },
  },
  transition: {
    read: {
      path: "/transition",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zEdge.or(z.null()),
    },
    create: {
      path: "/transition",
      data: apiSchemas.zEdge,
    },
  },
  transitions: {
    read: {
      path: "/transitions",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zEdge),
    },
  },
  terminal: {
    read: {
      path: "/terminal",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zNode),
    },
  },
  initial: {
    read: {
      path: "/initial",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zNode),
    },
  },
};

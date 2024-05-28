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
  branch: {
    read: {
      path: "/branch",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zNode.or(z.null()),
    },
    create: {
      path: "/branch",
      data: apiSchemas.zNode,
    },
  },
  branches: {
    read: {
      path: "/branches",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zNode),
    },
  },
  path: {
    read: {
      path: "/path",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zEdge.or(z.null()),
    },
    create: {
      path: "/path",
      data: apiSchemas.zEdge,
    },
  },
  paths: {
    read: {
      path: "/paths",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zEdge),
    },
  },
  leaves: {
    read: {
      path: "/leaves",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zNode),
    },
  },
  root: {
    read: {
      path: "/root",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zNode.or(z.null()),
    },
  },
};

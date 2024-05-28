import { schemas as apiSchemas } from "../../api/schemas.js";
import { z } from "zod";

export const schemas = {
  create: {
    path: "/",
    data: apiSchemas.zValue,
  },
  read: {
    path: "/",
    query: z.object({ id: z.string().uuid() }),
    data: apiSchemas.zValue.or(z.null()),
  },
  search: {
    path: "/search",
    query: z.object({}),
    data: z.array(apiSchemas.zValue),
  },
  type: {
    read: {
      path: "/type",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zType,
    },
  },
  value: {
    read: {
      path: "/value",
      query: z.object({ id: z.string().uuid() }),
      data: z.string(),
    },
  },
  node: {
    read: {
      path: "/node",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zNode.or(z.null()),
    },
  },
  edge: {
    read: {
      path: "/edge",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zEdge.or(z.null()),
    },
  },
  graph: {
    read: {
      path: "/graph",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zGraph.or(z.null()),
    },
  },
  pointer: {
    read: {
      path: "/pointer",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zPointer.or(z.null()),
    },
  },
  children: {
    read: {
      path: "/children",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zPointer),
    },
  },
  parents: {
    read: {
      path: "/parents",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zPointer),
    },
  },
};

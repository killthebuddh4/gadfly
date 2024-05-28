import { z } from "zod";
import { schemas as apiSchemas } from "../../api/schemas.js";

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
    path: "/search",
    query: z.object({}),
    data: z.array(apiSchemas.zGraph),
  },
  nodes: {
    read: {
      path: "/nodes",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zNode),
    },
  },
  edges: {
    read: {
      path: "/edges",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zEdge),
    },
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
      data: apiSchemas.zValue,
    },
  },
  parents: {
    read: {
      path: "/parents",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zPointer),
    },
  },
  children: {
    read: {
      path: "/children",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zPointer),
    },
  },
};

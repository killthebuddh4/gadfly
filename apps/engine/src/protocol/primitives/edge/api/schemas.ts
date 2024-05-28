import { z } from "zod";
import { schemas as apiSchemas } from "../../api/schemas.js";

export const schemas = {
  create: {
    path: "/",
    data: apiSchemas.zEdge,
  },
  read: {
    path: "/",
    query: z.object({ id: z.string().uuid() }),
    data: apiSchemas.zEdge.or(z.null()),
  },
  search: {
    path: "/search",
    query: z.object({}),
    data: z.array(apiSchemas.zEdge),
  },
  from: {
    read: {
      path: "/from",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zNode,
    },
  },
  to: {
    read: {
      path: "/to",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zNode,
    },
  },
  graph: {
    read: {
      path: "/graph",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zGraph,
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

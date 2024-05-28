import { z } from "zod";
import { schemas as apiSchemas } from "../../api/schemas.js";

export const schemas = {
  create: {
    path: "/",
    data: apiSchemas.zNode,
  },
  read: {
    path: "/",
    query: z.object({ id: z.string().uuid() }),
    data: apiSchemas.zNode.or(z.null()),
  },
  search: {
    path: "/search",
    query: z.object({}),
    data: z.array(apiSchemas.zNode),
  },
  upstream: {
    read: {
      path: "/upstream",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zEdge),
    },
  },
  downstream: {
    read: {
      path: "/downstream",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zEdge),
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

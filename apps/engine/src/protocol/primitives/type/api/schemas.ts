import { z } from "zod";
import { schemas as apiSchemas } from "../../api/schemas.js";

export const schemas = {
  create: {
    path: "/",
    data: apiSchemas.zType,
  },
  read: {
    path: "/",
    query: z.object({ id: z.string().uuid() }),
    data: apiSchemas.zType.or(z.null()),
  },
  search: {
    path: "/search",
    query: z.object({}),
    data: z.array(apiSchemas.zType),
  },
  url: {
    read: {
      path: "/url",
      query: z.object({ id: z.string() }),
      data: z.string(),
    },
  },
  description: {
    read: {
      path: "/description",
      query: z.object({ id: z.string() }),
      data: z.string(),
    },
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
  graphs: {
    read: {
      path: "/graphs",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zGraph),
    },
  },
  values: {
    read: {
      path: "/values",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zValue),
    },
  },
  pointers: {
    read: {
      path: "/pointers",
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
  children: {
    read: {
      path: "/children",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zPointer),
    },
  },
};

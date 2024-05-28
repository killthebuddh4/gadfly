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
  element: {
    read: {
      path: "/element",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zNode.or(z.null()),
    },
    create: {
      path: "/element",
      data: apiSchemas.zNode,
    },
  },
  elements: {
    read: {
      path: "/elements",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zNode),
    },
  },
  iterator: {
    read: {
      path: "/iterator",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zEdge.or(z.null()),
    },
    create: {
      path: "/iterator",
      data: apiSchemas.zEdge,
    },
  },
  iterators: {
    read: {
      path: "/iterators",
      query: z.object({ id: z.string().uuid() }),
      data: z.array(apiSchemas.zEdge),
    },
  },
  last: {
    read: {
      path: "/last",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zNode.or(z.null()),
    },
  },
  first: {
    read: {
      path: "/first",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zNode.or(z.null()),
    },
  },
};

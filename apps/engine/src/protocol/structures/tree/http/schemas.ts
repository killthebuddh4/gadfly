import { z } from "zod";
import { schemas as apiSchemas } from "../../../primitives/api/schemas.js";

export const schemas = {
  primitives: {
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
      primitives: {
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
      derivations: {
        children: {
          read: {
            path: "/branch/d/children",
            query: apiSchemas.zNode,
            data: z.array(apiSchemas.zNode),
          },
        },
        depth: {
          read: {
            path: "/branch/d/depth",
            query: apiSchemas.zNode,
            data: z.number(),
          },
        },
        parent: {
          read: {
            path: "/branch/d/parent",
            query: apiSchemas.zNode,
            data: apiSchemas.zNode.or(z.null()),
          },
        },
        trace: {
          read: {
            path: "/branch/d/trace",
            query: apiSchemas.zNode,
            data: z.array(apiSchemas.zNode),
          },
        },
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
  },
  derivations: {
    root: {
      read: {
        path: "/d/root",
        query: z.object({ id: z.string().uuid() }),
        data: apiSchemas.zNode.or(z.null()),
      },
    },
  },
  transactions: {
    expand: {
      path: "/transactions/expand",
      data: z.object({
        paths: z.array(
          z.object({
            id: z.string().uuid(),
            graph_id: z.string().uuid(),
            type_id: z.string().uuid(),
            value_id: z.string().uuid(),
            from_id: z.string().uuid(),
            to_id: z.string().uuid(),
          }),
        ),
        branches: z.array(
          z.object({
            id: z.string().uuid(),
            graph_id: z.string().uuid(),
            type_id: z.string().uuid(),
            value_id: z.string().uuid(),
          }),
        ),
      }),
    },
  },
};

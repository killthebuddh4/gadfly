import { schemas as apiSchemas } from "../../api/schemas.js";
import { z } from "zod";

export const schemas = {
  create: {
    path: "/",
    data: apiSchemas.zPointer,
  },
  read: {
    path: "/",
    query: z.object({ id: z.string().uuid() }),
    data: apiSchemas.zPointer,
  },
  search: {
    path: "/search",
    query: z.object({}),
    data: z.array(apiSchemas.zPointer),
  },
  from_node: {
    read: {
      path: "/from_node",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zNode.or(z.null()),
    },
  },
  from_edge: {
    read: {
      path: "/from_edge",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zEdge.or(z.null()),
    },
  },
  from_graph: {
    read: {
      path: "/from_graph",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zGraph.or(z.null()),
    },
  },
  from_pointer: {
    read: {
      path: "/from_pointer",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zPointer.or(z.null()),
    },
  },
  from_type: {
    read: {
      path: "/from_type",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zType.or(z.null()),
    },
  },
  from_value: {
    read: {
      path: "/from_value",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zValue.or(z.null()),
    },
  },
  to_node: {
    read: {
      path: "/to_node",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zNode.or(z.null()),
    },
  },
  to_edge: {
    read: {
      path: "/to_edge",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zEdge.or(z.null()),
    },
  },
  to_graph: {
    read: {
      path: "/to_graph",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zGraph.or(z.null()),
    },
  },
  to_pointer: {
    read: {
      path: "/to_pointer",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zPointer.or(z.null()),
    },
  },
  to_type: {
    read: {
      path: "/to_type",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zType.or(z.null()),
    },
  },
  to_value: {
    read: {
      path: "/to_value",
      query: z.object({ id: z.string().uuid() }),
      data: apiSchemas.zValue.or(z.null()),
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

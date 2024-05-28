import { z } from "zod";

const zEdge = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  graph_id: z.string().uuid(),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
  from_id: z.string().uuid(),
  to_id: z.string().uuid(),
});

const zGraph = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
});

const zNode = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  graph_id: z.string().uuid(),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
});

const zType = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  url: z.string().min(1),
  description: z.string().min(1),
});

const zValue = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  type_id: z.string().uuid(),
  value: z.string().min(1),
});

const zPointer = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
  from_value_id: z.string().uuid().or(z.null()),
  from_node_id: z.string().uuid().or(z.null()),
  from_graph_id: z.string().uuid().or(z.null()),
  from_edge_id: z.string().uuid().or(z.null()),
  from_pointer_id: z.string().uuid().or(z.null()),
  from_type_id: z.string().uuid().or(z.null()),
  to_value_id: z.string().uuid().or(z.null()),
  to_node_id: z.string().uuid().or(z.null()),
  to_graph_id: z.string().uuid().or(z.null()),
  to_edge_id: z.string().uuid().or(z.null()),
  to_pointer_id: z.string().uuid().or(z.null()),
  to_type_id: z.string().uuid().or(z.null()),
});

export const schemas = {
  zEdge,
  zGraph,
  zNode,
  zType,
  zValue,
  zPointer,
};

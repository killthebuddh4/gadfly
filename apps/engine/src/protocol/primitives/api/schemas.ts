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
  from: z.object({
    type: z.union([
      z.literal("value"),
      z.literal("node"),
      z.literal("graph"),
      z.literal("edge"),
      z.literal("pointer"),
      z.literal("type"),
    ]),
    id: z.string().uuid(),
  }),
  to: z.object({
    type: z.union([
      z.literal("value"),
      z.literal("node"),
      z.literal("graph"),
      z.literal("edge"),
      z.literal("pointer"),
      z.literal("type"),
    ]),
    id: z.string().uuid(),
  }),
});

export const schemas = {
  zEdge,
  zGraph,
  zNode,
  zType,
  zValue,
  zPointer,
};

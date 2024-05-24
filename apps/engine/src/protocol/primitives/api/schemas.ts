import { z } from "zod";

export const zEdge = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  graph_id: z.string().uuid(),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
  from_id: z.string().uuid(),
  to_id: z.string().uuid(),
});

export const zGraph = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
});

export const zNode = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  graph_id: z.string().uuid(),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
});

export const zType = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  url: z.string().min(1),
  description: z.string().min(1),
});

export const zValue = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  type_id: z.string().uuid(),
  value: z.string().min(1),
});

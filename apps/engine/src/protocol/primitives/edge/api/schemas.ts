import { z } from "zod";
import { zEdge } from "../../schemas.js";

export const zCreateRootBody = z.object({
  graph_id: z.string().uuid(),
  from_id: z.string().uuid(),
  to_id: z.string().uuid(),
  value_id: z.string().uuid(),
  type_id: z.string().uuid(),
});

export const zCreateRootData = z.object({
  id: z.string().uuid(),
  graph_id: z.string().uuid(),
  from_id: z.string().uuid(),
  to_id: z.string().uuid(),
  value_id: z.string().uuid(),
  type_id: z.string().uuid(),
});

export const zReadRootParams = z.object({
  id: z.string().uuid(),
});

export const zReadRootData = z.object({
  id: z.string().uuid(),
  graph_id: z.string().uuid(),
  from_id: z.string().uuid(),
  to_id: z.string().uuid(),
  value_id: z.string().uuid(),
  type_id: z.string().uuid(),
});

export const zInterpretRootParams = z.object({
  id: z.string().uuid(),
});

export const zReadFromParams = z.object({
  id: z.string().uuid(),
});

export const zInterpretFromParams = z.object({
  id: z.string().uuid(),
});

export const zReadToParams = z.object({
  id: z.string().uuid(),
});

export const zInterpretToParams = z.object({
  id: z.string().uuid(),
});

export const zReadGraphParams = z.object({
  id: z.string().uuid(),
});

export const zInterpretGraphParams = z.object({
  id: z.string().uuid(),
});

export const zReadValueParams = z.object({
  id: z.string().uuid(),
});

export const zInterpretValueParams = z.object({
  id: z.string().uuid(),
});

export const zReadParentsParams = z.object({
  id: z.string().uuid(),
});

export const zReadParentsData = z.array(z.object({ id: z.string().uuid() }));

export const zReadChildrenParams = z.object({
  id: z.string().uuid(),
});

export const zReadTypeParams = z.object({
  id: z.string().uuid(),
});

export const zReadTypeData = z.object({
  id: z.string().uuid(),
});

export const zReadChildrenData = z.array(z.object({ id: z.string().uuid() }));

export const zSearchData = z.array(zEdge);
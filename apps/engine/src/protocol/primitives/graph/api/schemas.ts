import { z } from "zod";
import { zNode } from "../../api/schemas.js";
import { zEdge } from "../../api/schemas.js";

export const zCreateRootBody = z.object({
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
});

export const zCreateRootData = z.object({
  id: z.string().uuid(),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
});

export const zReadRootParams = z.object({
  id: z.string().uuid(),
});

export const zReadRootData = z.object({
  id: z.string().uuid(),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
});

export const zReadEdgesParams = z.object({
  id: z.string().uuid(),
});

export const zReadEdgesData = z.array(zEdge);

export const zReadNodesParams = z.object({
  id: z.string().uuid(),
});

export const zReadNodesData = z.array(zNode);

export const zSearchData = z.array(zCreateRootData);

export const zReadParentsParams = z.object({
  id: z.string().uuid(),
});

export const zReadParentsData = z.array(z.object({ id: z.string().uuid() }));

export const zReadChildrenParams = z.object({
  id: z.string().uuid(),
});

export const zReadChildrenData = z.array(z.object({ id: z.string().uuid() }));

export const zReadTypeParams = z.object({
  id: z.string().uuid(),
});

export const zReadTypeData = z.object({
  id: z.string().uuid(),
});

import { z } from "zod";

export const zGraph = z.object({
  id: z.string().uuid(),
  created_at: z.date(),
  updated_at: z.date(),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
});

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

export const zReadEdgesData = z.array(
  z.object({
    id: z.string().uuid(),
    from_id: z.string().uuid(),
    to_id: z.string().uuid(),
  }),
);

export const zReadNodesParams = z.object({
  id: z.string().uuid(),
});

export const zReadNodesData = z.array(z.object({ id: z.string().uuid() }));

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

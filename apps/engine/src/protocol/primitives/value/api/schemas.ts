import { z } from "zod";

export const zCreateRootBody = z.object({
  type_id: z.string().uuid(),
  value: z.string(),
});

export const zCreateRootData = z.object({
  id: z.string().uuid(),
  type_id: z.string().uuid(),
  value: z.string(),
});

export const zReadRootParams = z.object({
  id: z.string().uuid(),
});

export const zReadRootData = z.object({
  id: z.string().uuid(),
  value: z.string(),
  type_id: z.string().uuid(),
});

export const zInterpretRootParams = z.object({
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

export const zReadChildrenData = z.array(z.object({ id: z.string().uuid() }));

export const zReadGraphParams = z.object({
  id: z.string().uuid(),
});

export const zReadGraphData = z
  .object({
    id: z.string().uuid(),
  })
  .or(z.null());

export const zReadNodeParams = z.object({
  id: z.string().uuid(),
});

export const zReadNodeData = z
  .object({
    id: z.string().uuid(),
  })
  .or(z.null());

export const zReadPointerParams = z.object({
  id: z.string().uuid(),
});

export const zReadPointerData = z
  .object({
    id: z.string().uuid(),
  })
  .or(z.null());

export const zReadEdgeParams = z.object({
  id: z.string().uuid(),
});

export const zReadEdgeData = z
  .object({
    id: z.string().uuid(),
  })
  .or(z.null());

export const zSearchData = z.array(
  z.object({ id: z.string().uuid(), value: z.string() }),
);

export const zReadTypeParams = z.object({
  id: z.string().uuid(),
});

export const zReadTypeData = z.object({
  id: z.string().uuid(),
});

import { z } from "zod";

export const zCreateRootBody = z.object({
  type: z.string().uuid(),
  value: z.string().uuid(),
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

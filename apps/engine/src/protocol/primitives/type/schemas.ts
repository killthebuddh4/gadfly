import { z } from "zod";

export const zType = z.object({
  id: z.string().uuid(),
  created_at: z.date(),
  updated_at: z.date(),
  url: z.string().min(1),
  description: z.string().min(1),
});

export const zCreateRootBody = z.object({
  url: z.string(),
  description: z.string(),
});

export const zCreateRootData = z.object({
  id: z.string().uuid(),
  url: z.string(),
  description: z.string(),
});

export const zReadRootParams = z.object({
  id: z.string().uuid(),
});

export const zReadRootData = z.object({
  id: z.string().uuid(),
  url: z.string(),
  description: z.string(),
});

export const zInterpretRootParams = z.object({
  id: z.string().uuid(),
});

export const zReadCodeParams = z.object({
  id: z.string().uuid(),
});

export const zInterpretCodeParams = z.object({
  id: z.string().uuid(),
});

export const zReadDescriptionParams = z.object({
  id: z.string().uuid(),
});

export const zInterpretDescriptionParams = z.object({
  id: z.string().uuid(),
});

export const zSearchData = z.array(zCreateRootData);

export const zReadParentsParams = z.object({
  id: z.string().uuid(),
});

export const zReadParentsData = z.array(z.object({ id: z.string().uuid() }));

export const zReadChildrenParams = z.object({
  id: z.string().uuid(),
});

export const zReadChildrenData = z.array(z.object({ id: z.string().uuid() }));

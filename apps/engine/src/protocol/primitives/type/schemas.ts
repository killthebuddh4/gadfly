import { z } from "zod";

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

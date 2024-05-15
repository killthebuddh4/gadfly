import { z } from "zod";

export const zCreateRootBody = z.object({
  type: z.string().uuid(),
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
  type_id: z.string().uuid(),
  value: z.string(),
});

export const zInterpretRootParams = z.object({
  id: z.string().uuid(),
});

export const zReadTypeParams = z.object({
  id: z.string().uuid(),
});

export const zInterpretTypeParams = z.object({
  id: z.string().uuid(),
});

export const zReadValueParams = z.object({
  id: z.string().uuid(),
});

export const zInterpretValueParams = z.object({
  id: z.string().uuid(),
});

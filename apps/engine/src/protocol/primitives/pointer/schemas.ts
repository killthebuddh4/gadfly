import { z } from "zod";

export const zPointer = z.object({
  type: z.union([
    z.literal("value"),
    z.literal("node"),
    z.literal("graph"),
    z.literal("edge"),
    z.literal("pointer"),
  ]),
  id: z.string().uuid(),
});

export const zReadRootParams = z.object({
  id: z.string().uuid(),
});

export const zReadRootData = z.object({
  id: z.string().uuid(),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
  from: zPointer,
  to: zPointer,
});

export const zCreateRootBody = z.object({
  type: z.string().uuid(),
  value: z.string().uuid(),
  from: zPointer,
  to: zPointer,
});

export const zCreateRootData = z.object({
  id: z.string().uuid(),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
  from: zPointer,
  to: zPointer,
});

export const zReadFromParams = z.object({
  id: z.string().uuid(),
});

export const zReadFromData = z.object({
  id: z.string().uuid(),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
  from: zPointer,
  to: zPointer,
});

export const zReadToParams = z.object({
  id: z.string().uuid(),
});

export const zReadToData = z.object({
  id: z.string().uuid(),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
  from: zPointer,
  to: zPointer,
});

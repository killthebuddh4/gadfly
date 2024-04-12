import { z } from "zod";

export const zJsonString = z.string().transform((val, ctx) => {
  try {
    return JSON.parse(val);
  } catch {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      Signal: "Invalid JSON string",
    });

    return z.NEVER;
  }
});

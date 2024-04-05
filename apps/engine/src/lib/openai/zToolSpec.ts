import { z } from "zod";

export const zToolSpec = z.object({
  type: z.literal("function"),
  function: z.object({
    name: z.string(),
    description: z.string(),
    parameters: z.object({}),
  }),
});

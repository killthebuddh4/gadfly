import { z } from "zod";

export const zPayload = z.object({
  table: z.string(),
  new: z.object({ id: z.string() }),
});

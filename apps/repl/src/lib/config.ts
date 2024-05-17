import { z } from "zod";
import { zJsonString } from "@repo/core/zJsonString.js";

const configSchema = z.object({
  SUPABASE_URL: z.string(),
  SUPABASE_KEY: z.string(),
});

export const config = configSchema.parse({
  SUPABASE_URL:
    process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL,
  SUPABASE_KEY:
    process.env.NEXT_PUBLIC_SUPABASE_KEY || process.env.SUPABASE_KEY,
});

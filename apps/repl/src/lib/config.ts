import { z } from "zod";

const configSchema = z.object({
  URL: z.string().url(),
  SUPABASE_URL: z.string(),
  SUPABASE_KEY: z.string(),
});

export const config = configSchema.parse({
  URL: "http://localhost:9999",
  SUPABASE_URL:
    process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL,
  SUPABASE_KEY:
    process.env.NEXT_PUBLIC_SUPABASE_KEY || process.env.SUPABASE_KEY,
});

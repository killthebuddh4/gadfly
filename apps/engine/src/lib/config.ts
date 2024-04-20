import { z } from "zod";
import fs from "fs/promises";
import { zJsonString } from "@repo/core/zJsonString.js";

const configSchema = zJsonString.pipe(
  z.object({
    OPENAI_API_KEY: z.string(),
    OPENAI_LOG_DIR: z.string(),
    SUPABASE_URL: z.string(),
  }),
);

const configData = await fs.readFile("./config.json", "utf-8");

export const config = configSchema.parse(configData);

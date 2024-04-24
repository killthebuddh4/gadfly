import { config } from "./config.js";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_KEY);

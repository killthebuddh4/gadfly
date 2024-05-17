import { config } from "@/lib/config";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_KEY);

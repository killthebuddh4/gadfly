import { supabase } from "../lib/supabase.js";

export const engine = () => {
  const channel = supabase
    .channel("everything")
    .on("postgres_changes", { event: "*", schema: "public" }, (payload) => {})
    .subscribe();
};

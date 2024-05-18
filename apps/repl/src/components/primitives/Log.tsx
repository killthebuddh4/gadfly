import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useEffect } from "react";

export const Log = () => {
  const [log, setLog] = useState<string[]>([]);
  useEffect(() => {
    const changes = supabase
      .channel("log")
      .on(
        "postgres_changes",
        {
          schema: "public", // Subscribes to the "public" schema in Postgres
          event: "*", // Listen to all changes
        },
        (payload) => {
          const json = JSON.stringify(payload, null, 2);
          setLog((log) => [...log, json]);
        },
      )
      .subscribe();

    return () => {
      changes.unsubscribe();
    };
  }, []);

  return (
    <div>
      <ol className="flex flex-col gap-4">
        {log.map((entry, index) => (
          <li key={index}>
            <pre>{entry}</pre>
          </li>
        ))}
      </ol>
    </div>
  );
};

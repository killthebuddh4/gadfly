"use client";

import { useState, useEffect } from "react";
import { client } from "engine/protocol/primitives/client.js";
import Link from "next/link.js";
import { Log } from "@/components/Log";

type R<T extends (a: any) => any> = Awaited<ReturnType<T>>;

const URL = "http://localhost:9999";

export default function Page() {
  const [graphs, setGraphs] = useState<
    R<typeof client.graph.search> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const response = await client.graph.search({
        url: URL,
      });

      setGraphs(response);
    })();
  }, []);

  if (graphs === undefined) {
    return <div>Loading...</div>;
  }

  if (!graphs.ok) {
    return <div>Error Loading Graphs: {graphs.status}</div>;
  }

  return (
    <div className="p-4">
      <Log />
      <h1 className="font-bold mb-4">Graphs</h1>
      <ul className="flex flex-col gap-4">
        {graphs.data.map((graph) => (
          <li key={graph.id}>
            <Link
              className="cursor-pointer text-blue-500 hover:text-blue-900"
              href={`/p/graph/${graph.id}`}
            >
              {graph.id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

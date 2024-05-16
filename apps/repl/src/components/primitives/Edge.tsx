import { useState, useEffect } from "react";
import { client } from "engine/protocol/primitives/client.js";
import { Type } from "./Type";
import { Value } from "./Value";
import Link from "next/link";

type R<T extends (a: any) => any> = Awaited<ReturnType<T>>;

const URL = "http://localhost:9999";

export const Edge = ({ id }: { id: string }) => {
  const [edge, setEdge] = useState<R<typeof client.edge.read> | undefined>(
    undefined,
  );

  useEffect(() => {
    (async () => {
      const response = await client.edge.read({
        id,
        url: URL,
      });

      setEdge(response);
    })();
  }, [id]);

  if (edge === undefined) {
    return <div>Loading...</div>;
  }

  if (!edge.ok) {
    return <div>Error Loading Edge: {edge.status}</div>;
  }

  return (
    <div className="p-4 bg-red-100">
      <div className="mb-4">
        <h1 className="font-bold">Edge</h1>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-900"
          href={`/p/edge/${edge.data.id}`}
        >
          {edge.data.id}
        </Link>
      </div>

      <div className="mb-4">
        <h1 className="font-bold">Graph</h1>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-900"
          href={`/p/graph/${edge.data.graph_id}`}
        >
          {edge.data.graph_id}
        </Link>
      </div>

      <div className="mb-4">
        <h1 className="font-bold">Type</h1>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-900"
          href={`/p/type/${edge.data.type_id}`}
        >
          {edge.data.type_id}
        </Link>
      </div>

      <div className="mb-4">
        <h1 className="font-bold">Value</h1>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-900"
          href={`/p/value/${edge.data.value_id}`}
        >
          {edge.data.value_id}
        </Link>
      </div>

      <div className="mb-4">
        <h1 className="font-bold">From</h1>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-900"
          href={`/p/node/${edge.data.from_id}`}
        >
          {edge.data.from_id}
        </Link>
      </div>

      <div className="mb-4">
        <h1 className="font-bold">To</h1>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-900"
          href={`/p/node/${edge.data.to_id}`}
        >
          {edge.data.to_id}
        </Link>
      </div>
    </div>
  );
};

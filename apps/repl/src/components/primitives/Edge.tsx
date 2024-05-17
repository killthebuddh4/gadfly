import { useState, useEffect } from "react";
import { client } from "engine/protocol/primitives/client.js";
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

  const [parents, setParents] = useState<
    R<typeof client.edge.parents.read> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const response = await client.edge.parents.read({ id, url: URL });

      setParents(response);
    })();
  }, [id]);

  const [children, setChildren] = useState<
    R<typeof client.edge.children.read> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const response = await client.edge.children.read({ id, url: URL });

      setChildren(response);
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

      <h1 className="font-bold">Parents</h1>
      <div className="flex flex-col gap-4 mb-4">
        {(() => {
          if (parents === undefined) {
            return "Loading Parents...";
          }

          if (!parents.ok) {
            return "Error Loading Parents";
          }

          return parents.data.map((parent) => {
            return (
              <Link
                key={parent.id}
                className="cursor-pointer text-blue-500 hover:text-blue-900"
                href={`/p/pointer/${parent.id}`}
              >
                {parent.id}
              </Link>
            );
          });
        })()}
      </div>

      <h1 className="font-bold">Children</h1>
      <div className="flex flex-col gap-4 mb-4">
        {(() => {
          if (children === undefined) {
            return "Loading Children...";
          }

          if (!children.ok) {
            return "Error Loading Children";
          }

          return children.data.map((child) => {
            return (
              <Link
                key={child.id}
                className="cursor-pointer text-blue-500 hover:text-blue-900"
                href={`/p/pointer/${child.id}`}
              >
                {child.id}
              </Link>
            );
          });
        })()}
      </div>
    </div>
  );
};

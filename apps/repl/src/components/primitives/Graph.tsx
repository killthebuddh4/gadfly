"use client";
import { useEffect, useState } from "react";
import { client } from "engine/protocol/primitives/client.js";
import { Node } from "./Node";
import { Edge } from "./Edge";
import { Type } from "./Type";
import { Value } from "./Value";
import Link from "next/link";

type R<T extends (a: any) => any> = Awaited<ReturnType<T>>;

const URL = "http://localhost:9999";

export const Graph = ({ id }: { id: string }) => {
  const [graph, setGraph] = useState<R<typeof client.graph.read> | undefined>(
    undefined,
  );

  useEffect(() => {
    (async () => {
      const response = await client.graph.read({ id, url: URL });

      setGraph(response);
    })();
  }, []);

  const [nodes, setNodes] = useState<
    R<typeof client.graph.nodes.read> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const response = await client.graph.nodes.read({ id, url: URL });

      setNodes(response);
    })();
  }, [id]);

  const [edges, setEdges] = useState<
    R<typeof client.graph.edges.read> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const response = await client.graph.edges.read({ id, url: URL });

      setEdges(response);
    })();
  }, [id]);

  if (graph === undefined) {
    return <div>Loading...</div>;
  }

  if (!graph.ok) {
    return <div>Error Loading Graph</div>;
  }

  return (
    <div className="flex flex-col p-4 bg-gray-100">
      <div className="mb-4">
        <h1 className="font-bold">Graph</h1>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-900"
          href={`/p/graph/${graph.data.id}`}
        >
          {graph.data.id}
        </Link>
      </div>

      <div className="mb-4">
        <h1 className="font-bold">Type</h1>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-900"
          href={`/p/type/${graph.data.type_id}`}
        >
          {graph.data.type_id}
        </Link>
      </div>

      <div className="mb-4">
        <h1 className="font-bold">Value</h1>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-900"
          href={`/p/value/${graph.data.value_id}`}
        >
          {graph.data.value_id}
        </Link>
      </div>

      <h1 className="font-bold">Nodes</h1>
      <div className="flex flex-col gap-4 mb-4">
        {(() => {
          if (nodes === undefined) {
            return "Loading Nodes...";
          }

          if (!nodes.ok) {
            return "Error Loading Nodes";
          }

          return nodes.data.map((node) => {
            return (
              <Link
                key={node.id}
                className="cursor-pointer text-blue-500 hover:text-blue-900"
                href={`/p/node/${node.id}`}
              >
                {node.id}
              </Link>
            );
          });
        })()}
      </div>

      <h1 className="font-bold">Edges</h1>
      <div className="flex flex-col gap-4 mb-4">
        {(() => {
          if (edges === undefined) {
            return "Loading Edges...";
          }

          if (!edges.ok) {
            return "Error Loading Edges";
          }

          return edges.data.map((edge) => {
            return (
              <Link
                key={edge.id}
                className="cursor-pointer text-blue-500 hover:text-blue-900"
                href={`/p/edge/${edge.id}`}
              >
                {edge.id}
              </Link>
            );
          });
        })()}
      </div>
    </div>
  );
};

"use client";
import { useEffect, useState } from "react";
import { client } from "engine/protocol/primitives/client.js";
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

  const [parents, setParents] = useState<
    R<typeof client.graph.parents.read> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const response = await client.graph.parents.read({ id, url: URL });

      setParents(response);
    })();
  }, [id]);

  const [children, setChildren] = useState<
    R<typeof client.graph.children.read> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const response = await client.graph.children.read({ id, url: URL });

      setChildren(response);
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

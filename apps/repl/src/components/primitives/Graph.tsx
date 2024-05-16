"use client";
import { useEffect, useState } from "react";
import { client } from "engine/protocol/primitives/client.js";
import { Node } from "./Node";
import { Edge } from "./Edge";
import { Type } from "./Type";
import { Value } from "./Value";

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
    <div className="flex flex-col gap-4 p-4 bg-gray-200">
      <h1 className="font-bold">Graph</h1>
      <p>{graph.data.id}</p>
      <Type id={graph.data.type_id} />
      <Value id={graph.data.value_id} />
      <div className="flex flex-col gap-8">
        <h1>Nodes</h1>
        {(() => {
          if (nodes === undefined) {
            return "Loading Nodes...";
          }

          if (!nodes.ok) {
            return "Error Loading Nodes";
          }

          return nodes.data.map((node) => <Node key={node.id} id={node.id} />);
        })()}
      </div>
      <h1>Edges</h1>
      {(() => {
        if (edges === undefined) {
          return "Loading Edges...";
        }

        if (!edges.ok) {
          return "Error Loading Edges";
        }

        return edges.data.map((edge) => <Edge key={edge.id} id={edge.id} />);
      })()}
    </div>
  );
};

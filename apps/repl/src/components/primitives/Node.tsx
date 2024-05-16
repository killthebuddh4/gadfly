import { useState, useEffect } from "react";
import { client } from "engine/protocol/primitives/client.js";
import { Type } from "./Type";
import { Value } from "./Value";
import { Edge } from "./Edge";
import Link from "next/link";

type R<T extends (a: any) => any> = Awaited<ReturnType<T>>;

const URL = "http://localhost:9999";

export const Node = ({ id }: { id: string }) => {
  const [node, setNode] = useState<R<typeof client.node.read> | undefined>(
    undefined,
  );

  useEffect(() => {
    (async () => {
      const response = await client.node.read({
        id,
        url: URL,
      });

      setNode(response);
    })();
  }, [id]);

  const [upstream, setUpstream] = useState<
    R<typeof client.node.upstream.read> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      if (node === undefined) {
        return;
      }

      if (!node.ok) {
        return;
      }

      const response = await client.node.upstream.read({
        id,
        url: URL,
      });

      setUpstream(response);
    })();
  }, [node, node?.ok]);

  const [downstream, setDownstream] = useState<
    R<typeof client.node.downstream.read> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      if (node === undefined) {
        return;
      }

      if (!node.ok) {
        return;
      }

      const response = await client.node.downstream.read({
        id,
        url: URL,
      });

      setDownstream(response);
    })();
  }, [node, node?.ok]);

  if (node === undefined) {
    return <div>Loading...</div>;
  }

  if (!node.ok) {
    return <div>Error Loading Node: {node.status}</div>;
  }

  return (
    <div className="p-4 bg-purple-100">
      <div className="mb-4">
        <h1 className="font-bold">Node</h1>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-900"
          href={`/p/node/${node.data.id}`}
        >
          {node.data.id}
        </Link>
      </div>

      <div className="mb-4">
        <h1 className="font-bold">Graph</h1>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-900"
          href={`/p/graph/${node.data.graph_id}`}
        >
          {node.data.graph_id}
        </Link>
      </div>

      <div className="mb-4">
        <h1 className="font-bold">Type</h1>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-900"
          href={`/p/type/${node.data.type_id}`}
        >
          {node.data.type_id}
        </Link>
      </div>

      <div className="mb-4">
        <h1 className="font-bold">Value</h1>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-900"
          href={`/p/value/${node.data.value_id}`}
        >
          {node.data.value_id}
        </Link>
      </div>
      <h1 className="font-bold">Downstream</h1>
      <div className="flex flex-col gap-4 mb-4">
        {(() => {
          if (downstream === undefined) {
            return "Loading Edges...";
          }

          if (!downstream.ok) {
            return "Error Loading Edges";
          }

          return downstream.data.map((edge) => {
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

      <h1 className="font-bold">Upstream</h1>
      <div className="flex flex-col gap-4 mb-4">
        {(() => {
          if (upstream === undefined) {
            return "Loading Edges...";
          }

          if (!upstream.ok) {
            return "Error Loading Edges";
          }

          return upstream.data.map((edge) => {
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

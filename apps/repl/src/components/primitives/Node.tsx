import { useState, useEffect } from "react";
import { client } from "engine/protocol/primitives/client.js";
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

  const [parents, setParents] = useState<
    R<typeof client.node.parents.read> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const response = await client.node.parents.read({ id, url: URL });

      setParents(response);
    })();
  }, [id]);

  const [children, setChildren] = useState<
    R<typeof client.node.children.read> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const response = await client.node.children.read({ id, url: URL });

      setChildren(response);
    })();
  }, [id]);

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

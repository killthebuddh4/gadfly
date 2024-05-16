import { useState, useEffect } from "react";
import { client } from "engine/protocol/primitives/client.js";
import { Type } from "./Type";
import { Value } from "./Value";
import { Edge } from "./Edge";

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
    <div className="p-4 bg-purple-200">
      <p>{id}</p>
      <Type id={node.data.type_id} />
      <Value id={node.data.value_id} />
      <h1>downstream</h1>
      {(() => {
        if (downstream === undefined) {
          return "Loading Downstream...";
        }

        if (!downstream.ok) {
          return "Error Loading Downstream";
        }

        return downstream.data.map((edge) => (
          <Edge key={edge.id} id={edge.id} />
        ));
      })()}
    </div>
  );
};

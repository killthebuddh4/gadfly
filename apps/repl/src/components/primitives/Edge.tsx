import { useState, useEffect } from "react";
import { client } from "engine/protocol/primitives/client.js";
import { Type } from "./Type";
import { Value } from "./Value";
import { Node } from "./Node";

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
    <div className="p-4 bg-orange-200">
      <h1 className="font-bold">Edge</h1>
      <p>{id}</p>
      <Type id={edge.data.type_id} />
      <Value id={edge.data.value_id} />
      <h1>from</h1>
      <p>{edge.data.from_id}</p>
      <h1>to</h1>
      <p>{edge.data.to_id}</p>
    </div>
  );
};

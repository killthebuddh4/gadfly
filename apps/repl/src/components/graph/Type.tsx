import { useState, useEffect } from "react";
import { client } from "engine/protocol/primitives/client.js";

type R<T extends (a: any) => any> = Awaited<ReturnType<T>>;

const URL = "http://localhost:9999";

export const Type = ({
  id,
  opts,
}: {
  id: string;
  opts?: { compact?: boolean };
}) => {
  const compact = (() => {
    if (opts?.compact === undefined) {
      return true;
    } else {
      return opts.compact;
    }
  })();

  const [type, setType] = useState<R<typeof client.type.read> | undefined>(
    undefined,
  );

  useEffect(() => {
    (async () => {
      const response = await client.type.read({
        id,
        url: URL,
      });

      setType(response);
    })();
  }, [id]);

  if (type === undefined) {
    return <div>Loading...</div>;
  }

  if (!type.ok) {
    return <div>Error Loading Type: {type.status}</div>;
  }

  if (compact) {
    return (
      <div className="bg-green-200">
        <p>{type.data.url}</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-green-200">
      <h1 className="font-bold">Type</h1>
      <p>{id}</p>
      <h2>url</h2>
      <p>{type.data.url}</p>
      <h2>description</h2>
      <p>{type.data.description}</p>
    </div>
  );
};

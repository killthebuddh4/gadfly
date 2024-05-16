import { useState, useEffect } from "react";
import { client } from "engine/protocol/primitives/client.js";
import Link from "next/link.js";

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
      return false;
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
      <div className="bg-green-100">
        <p>{type.data.url}</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-green-100">
      <div className="mb-4">
        <h1 className="font-bold">Type</h1>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-900"
          href={`/p/type/${type.data.id}`}
        >
          {type.data.id}
        </Link>
      </div>
      <h2>url</h2>
      <p>{type.data.url}</p>
      <h2>description</h2>
      <p>{type.data.description}</p>
    </div>
  );
};

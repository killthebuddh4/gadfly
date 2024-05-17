import { useState, useEffect } from "react";
import { client } from "engine/protocol/primitives/client.js";
import Link from "next/link";

type R<T extends (a: any) => any> = Awaited<ReturnType<T>>;

const URL = "http://localhost:9999";

export const Value = ({ id }: { id: string }) => {
  const [value, setValue] = useState<R<typeof client.value.read> | undefined>(
    undefined,
  );

  useEffect(() => {
    (async () => {
      const response = await client.value.read({
        id,
        url: URL,
      });

      setValue(response);
    })();
  }, [id]);

  if (value === undefined) {
    return <div>Loading...</div>;
  }

  if (!value.ok) {
    return <div>Error Loading Value: {value.status}</div>;
  }

  return (
    <div className="p-4 bg-blue-100">
      <div className="mb-4">
        <h1 className="font-bold">Value</h1>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-900"
          href={`/p/value/${value.data.id}`}
        >
          {value.data.id}
        </Link>
      </div>

      <p>{value.data.value}</p>
    </div>
  );
};

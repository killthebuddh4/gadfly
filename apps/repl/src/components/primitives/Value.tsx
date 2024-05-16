import { useState, useEffect } from "react";
import { client } from "engine/protocol/primitives/client.js";
import { Type } from "./Type";

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
    <div className="p-4 bg-blue-200">
      <p>{id}</p>
      <Type id={value.data.type_id} />
      <div className="bg-red-100">
        <p>{value.data.value}</p>
      </div>
    </div>
  );
};

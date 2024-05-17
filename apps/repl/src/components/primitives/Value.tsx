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

  const [parents, setParents] = useState<
    R<typeof client.value.parents.read> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const response = await client.value.parents.read({ id, url: URL });

      setParents(response);
    })();
  }, [id]);

  const [children, setChildren] = useState<
    R<typeof client.value.children.read> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const response = await client.value.children.read({ id, url: URL });

      setChildren(response);
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

      <div className="mb-4">
        <p>{value.data.value}</p>
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

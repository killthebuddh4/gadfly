import { useState, useEffect } from "react";
import { client } from "engine/protocol/primitives/client.js";
import Link from "next/link";

type R<T extends (a: any) => any> = Awaited<ReturnType<T>>;

const URL = "http://localhost:9999";

export const Type = ({ id }: { id: string }) => {
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

  const [parents, setParents] = useState<
    R<typeof client.type.parents.read> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const response = await client.type.parents.read({ id, url: URL });

      setParents(response);
    })();
  }, [id]);

  const [children, setChildren] = useState<
    R<typeof client.type.children.read> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const response = await client.type.children.read({ id, url: URL });

      setChildren(response);
    })();
  }, [id]);

  if (type === undefined) {
    return <div>Loading...</div>;
  }

  if (!type.ok) {
    return <div>Error Loading Type: {type.status}</div>;
  }

  return (
    <div className="p-4 bg-red-100">
      <div className="mb-4">
        <h1 className="font-bold">Type</h1>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-900"
          href={`/p/type/${type.data.id}`}
        >
          {type.data.id}
        </Link>
      </div>

      <div className="mb-4">
        <h1 className="font-bold">URL</h1>
        <p>{type.data.url}</p>
      </div>

      <div className="mb-4">
        <h1 className="font-bold">Description</h1>
        <p>{type.data.description}</p>
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

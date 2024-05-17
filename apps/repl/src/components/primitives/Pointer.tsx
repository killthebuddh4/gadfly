import { useState, useEffect } from "react";
import { client } from "engine/protocol/primitives/client.js";
import Link from "next/link";

type R<T extends (a: any) => any> = Awaited<ReturnType<T>>;

const URL = "http://localhost:9999";

export const Pointer = ({ id }: { id: string }) => {
  const [pointer, setPointer] = useState<
    R<typeof client.pointer.read> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const response = await client.pointer.read({
        id,
        url: URL,
      });

      setPointer(response);
    })();
  }, [id]);

  const [parents, setParents] = useState<
    R<typeof client.graph.parents.read> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const response = await client.graph.parents.read({ id, url: URL });

      setParents(response);
    })();
  }, [id]);

  const [children, setChildren] = useState<
    R<typeof client.graph.children.read> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const response = await client.graph.children.read({ id, url: URL });

      setChildren(response);
    })();
  }, [id]);

  if (pointer === undefined) {
    return <div>Loading...</div>;
  }

  if (!pointer.ok) {
    return <div>Error Loading Pointer: {pointer.status}</div>;
  }

  return (
    <div className="p-4 bg-red-100">
      <div className="mb-4">
        <h1 className="font-bold">Pointer</h1>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-900"
          href={`/p/pointer/${pointer.data.id}`}
        >
          {pointer.data.id}
        </Link>
      </div>

      <div className="mb-4">
        <h1 className="font-bold">Value</h1>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-900"
          href={`/p/value/${pointer.data.value_id}`}
        >
          {pointer.data.value_id}
        </Link>
      </div>

      <div className="mb-4">
        <h1 className="font-bold">{`From ${pointer.data.from.type}`}</h1>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-900"
          href={`/p/${pointer.data.from.type}/${pointer.data.from.id}`}
        >
          {pointer.data.from.id}
        </Link>
      </div>

      <div className="mb-4">
        <h1 className="font-bold">{`From ${pointer.data.to.type}`}</h1>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-900"
          href={`/p/${pointer.data.to.type}/${pointer.data.to.id}`}
        >
          {pointer.data.to.id}
        </Link>
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

"use client";

import { Log } from "@/components/primitives/Log";

type R<T extends (a: any) => any> = Awaited<ReturnType<T>>;

const URL = "http://localhost:9999";

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="font-bold mb-4">Logs</h1>
      <Log />
    </div>
  );
}

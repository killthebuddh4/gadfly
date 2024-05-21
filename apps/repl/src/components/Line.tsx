import React, { useState } from "react";
import { z } from "zod";
import { client } from "engine/protocol/primitives/client.js";
import { zEdge } from "engine/protocol/primitives/schemas.js";
import { zNode } from "engine/protocol/primitives/schemas.js";

const EDGE_FIELDS = {
  type: "type",
  value: "value",
  graph: "graph",
  from: "from",
  to: "to",
} as const;

export const Line = ({ ctx }: { ctx: { id: string } }) => {
  const [input, setInput] = useState("");
  const [commands, setCommands] = useState<string[]>([]);

  return (
    <div className="font-mono text-sm p-4 min-h-screen">
      <div className="space-y-2">
        {commands.map((command, index) => (
          <div key={index} className="whitespace-pre">
            {`root@gadfly.run > ${command}`}
          </div>
        ))}
        <div className="flex">
          <span className="mr-2 whitespace-nowrap">{"root@gadfly.run >"}</span>
          <input
            type="text"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
            onKeyDown={() => null}
            className="outline-none w-full"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

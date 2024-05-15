"use client";

import { useState, useEffect } from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import {
  readRootClient,
  readEdgesClient,
  readNodesClient,
} from "engine/protocol/primitives/graph/client.js";

import "reactflow/dist/style.css";

const URL = "http://localhost:9999";

export const Graph = ({ id }: { id: string }) => {
  const [graph, setGraph] = useState<
    Awaited<ReturnType<typeof readRootClient>>["data"] | null
  >(null);

  const [nodes, setNodes] = useState<
    Awaited<ReturnType<typeof readNodesClient>>["data"] | null
  >(null);

  const [edges, setEdges] = useState<
    Awaited<ReturnType<typeof readEdgesClient>>["data"] | null
  >(null);

  useEffect(() => {
    (async () => {
      const graph = await readRootClient({ id, url: URL });

      if (!graph.ok) {
        setGraph(null);
      } else {
        setGraph(graph.data);
      }
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      const nodes = await readNodesClient({ id, url: URL });

      if (!nodes.ok) {
        setNodes(null);
      } else {
        setNodes(nodes.data);
      }
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      const edges = await readEdgesClient({ id, url: URL });

      if (!edges.ok) {
        setEdges(null);
      } else {
        setEdges(edges.data);
      }
    })();
  }, [id]);

  return (
    <div className="h-[50vh] w-[50vw] border border-gray-500">
      <ReactFlow>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

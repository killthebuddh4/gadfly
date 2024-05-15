"use client";

import { useState, useEffect, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  NodeChange,
  EdgeChange,
} from "reactflow";
import {
  readRootClient,
  readEdgesClient,
  readNodesClient,
} from "engine/protocol/primitives/graph/client.js";

import "reactflow/dist/style.css";
import { setEngine } from "crypto";

const URL = "http://localhost:9999";

type FlowNode = {
  id: string;
  data: Record<string, unknown>;
  position: { x: number; y: number };
};

type FlowEdge = {
  id: string;
  source: string;
  target: string;
};

export const Graph = ({ id }: { id: string }) => {
  const [flowNodes, setFlowNodes] = useState<FlowNode[]>([]);
  const [flowEdges, setFlowEdges] = useState<FlowEdge[]>([]);

  useEffect(() => {
    (async () => {
      const nodes = await readNodesClient({ id, url: URL });

      if (nodes.ok) {
        setFlowNodes(
          nodes.data.map((node, i) => ({
            id: node.id,
            data: {},
            position: { x: 0, y: i * 100 },
          })),
        );
      }
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      const edges = await readEdgesClient({ id, url: URL });

      if (edges.ok) {
        setFlowEdges(
          edges.data.map((edge) => ({
            id: edge.id,
            source: edge.from_id,
            target: edge.to_id,
          })),
        );
      }
    })();
  }, [id]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setFlowNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setFlowEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  return (
    <div className="h-[50vh] w-[50vw] border border-gray-500">
      <ReactFlow
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodes={flowNodes}
        edges={flowEdges}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

"use client";

import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

export const App = () => {
  return (
    <div className="h-screen w-screen">
      <ReactFlow>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

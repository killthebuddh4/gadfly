"use client";

import { Graph } from "./Graph";

import "reactflow/dist/style.css";

export const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <h1>Gadfly UI</h1>
      <div className="flex flex-row ml-auto mr-auto">
        <Graph id="85bac0ac-8b45-4141-a8c4-0baafc3c2a9e" />
      </div>
      <h1>End Gadfly UI</h1>
    </div>
  );
};

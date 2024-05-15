"use client";

import { Graph } from "./Graph";

import "reactflow/dist/style.css";

export const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <h1>Gadfly UI</h1>
      <div className="flex flex-row ml-auto mr-auto">
        <Graph id="1e82aa85-ef70-4a26-b424-6e0b9c582ff2" />
      </div>
      <h1>End Gadfly UI</h1>
    </div>
  );
};
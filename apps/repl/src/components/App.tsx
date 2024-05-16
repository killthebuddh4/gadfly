"use client";

import { Graph } from "./graph/Graph";
import { Type } from "@/components/actions/Type";

import "reactflow/dist/style.css";

export const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="flex flex-row ml-auto mr-auto">
        <Type />
      </div>
    </div>
  );
};

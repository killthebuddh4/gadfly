import { Graph } from "./Graph.js";

export type Actor = {
  unwrap: () => Promise<Graph>;
};

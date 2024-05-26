import { Graph } from "./Graph.js";

export type Dialogue = {
  unwrap: () => Promise<Graph>;
};

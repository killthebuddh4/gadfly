import { Graph } from "../graphs/types/Graph.js";

export type Dialogue = {
  unwrap: () => Promise<Graph>;
};

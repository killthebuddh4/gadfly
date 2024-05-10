import { Graph } from "../graphs/types/Graph.js";

export type Actor = {
  unwrap: () => Promise<Graph>;
};

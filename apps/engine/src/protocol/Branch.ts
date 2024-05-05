import { Graph } from "../primitives/Graph.js";
import { Commit } from "./Commit.js";

export type Branch = {
  graph: () => Promise<Graph>;
  head: () => Promise<Commit>;
  tail: () => Promise<Commit>;
};

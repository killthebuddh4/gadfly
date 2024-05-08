import { Graph } from "../../primitives/Graph.js";
import { Log } from "./Log.js";

export type Commit = {
  owner: () => Promise<Log>;
  unwrap: () => Promise<Graph>;
  parent: () => Promise<Commit | null>;
  children: () => Promise<Commit[]>;
};

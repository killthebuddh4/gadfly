import { Sequence } from "../../primitives/Sequence.js";
import { Commit } from "./Commit.js";
import { Log } from "./Log.js";
import { Graph } from "../../primitives/Graph.js";

export type Branch<G = Graph> = {
  container: () => Promise<Log<G>>;
  unwrap: () => Promise<Sequence<Commit<G>>>;
  tail: () => Promise<Commit<G> | null>;
  head: () => Promise<Commit<G> | null>;
  upstream: () => Promise<Branch<G>[]>;
  downstream: () => Promise<Branch<G>[]>;
};

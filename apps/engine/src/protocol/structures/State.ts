import { Flow } from "./Flow.js";

export type State<S> = {
  graph: () => Promise<S>;
  container: () => Promise<Flow<S>>;
  upstream: () => Promise<State<S>[] | null>;
  downstream: () => Promise<State<S>[] | null>;
};

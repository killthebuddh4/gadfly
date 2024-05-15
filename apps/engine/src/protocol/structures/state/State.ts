import { Flow } from "../flow/Flow.js";

export type State<S> = {
  unwrap: () => Promise<S>;
  container: () => Promise<Flow<S>>;
  upstream: () => Promise<State<S>[] | null>;
  downstream: () => Promise<State<S>[] | null>;
};

import { Sequence } from "./Sequence.js";

export type Element<S> = {
  graph: () => Promise<S>;
  container: () => Promise<Sequence<S>>;
  upstream: () => Promise<Element<S> | null>;
  downstream: () => Promise<Element<S> | null>;
};

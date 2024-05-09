import { Machine } from "./Machine.js";

export type Phase<S> = {
  graph: () => Promise<S>;
  container: () => Promise<Machine<S>>;
  upstream: () => Promise<Phase<S>[] | null>;
  downstream: () => Promise<Phase<S>[] | null>;
};

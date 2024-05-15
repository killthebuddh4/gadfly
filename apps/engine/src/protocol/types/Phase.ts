import { Machine } from "./Machine.js";

export type Phase<S> = {
  unwrap: () => Promise<S>;
  container: () => Promise<Machine<S>>;
  upstream: () => Promise<Phase<S>[] | null>;
  downstream: () => Promise<Phase<S>[] | null>;
};

import { Tree } from "./Tree.js";

export type Leaf<S> = {
  unwrap: () => Promise<S>;
  container: () => Promise<Tree<S>>;
  upstream: () => Promise<Leaf<S> | null>;
  downstream: () => Promise<Leaf<S>[] | null>;
};

import { Tree } from "../tree/Tree.js";

export type Expression = {
  tree: () => Promise<Tree>;
};

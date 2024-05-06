import { Tree } from "../../primitives/Tree.js";

export type Expression = {
  tree: () => Promise<Tree>;
};

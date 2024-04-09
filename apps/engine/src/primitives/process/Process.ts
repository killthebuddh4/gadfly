import { Sequence } from "../sequence/Sequence.js";
import { Generation } from "../generation/Generation.js";
import { Node } from "../node/Node.js";

export type Process = {
  node: Node;
  history: Generation<Sequence>;
  generate: () => Promise<Sequence>;
};

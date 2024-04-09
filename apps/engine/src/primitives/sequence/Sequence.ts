import { Signal } from "../signal/Signal.js";
import { Generation } from "../generation/Generation.js";
import { Node } from "../node/Node.js";

export type Sequence = {
  node: Node;
  history: Generation<Signal>;
  generate: () => Promise<Signal>;
};

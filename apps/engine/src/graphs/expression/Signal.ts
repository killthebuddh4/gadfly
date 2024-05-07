import { Node } from "../../primitives/Node.js";
import { Feedback } from "./Feedback.js";

export type Signal = {
  node: () => Promise<Node>;
  feedback: () => Promise<Feedback | null>;
};

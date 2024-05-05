import { Edge } from "../primitives/Edge.js";

export type Operation = {
  edge: () => Promise<Edge>;
};

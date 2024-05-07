import { Sequence } from "../../primitives/Sequence.js";

export type Branch = {
  sequence: () => Promise<Sequence>;
};

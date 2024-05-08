import { Sequence } from "../../primitives/Sequence.js";
import { Log } from "./Log.js";

export type Branch = {
  owner: () => Promise<Log>;
  unwrap: () => Promise<Sequence>;
};

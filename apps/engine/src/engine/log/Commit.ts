import { Node } from "../../primitives/Node.js";
import { Log } from "./Log.js";

export type Commit = {
  owner: () => Promise<Log>;
  unwrap: () => Promise<Node>;
};

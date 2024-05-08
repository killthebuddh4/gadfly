import { Append } from "./Append.js";
import { Expand } from "./Expand.js";
import { Reduce } from "./Reduce.js";
import { Map } from "./Map.js";

export type Operation =
  | {
      type: "Append";
      operation: Append;
    }
  | {
      type: "Expand";
      operation: Expand;
    }
  | {
      type: "Reduce";
      operation: Reduce;
    }
  | {
      type: "Map";
      operation: Map;
    };

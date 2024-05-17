import { client as valueClient } from "./value/client.js";
import { client as nodeClient } from "./node/client.js";
import { client as edgeClient } from "./edge/client.js";
import { client as graphClient } from "./graph/client.js";
import { client as typeClient } from "./type/client.js";
import { client as pointerClient } from "./pointer/client.js";

export const client = {
  value: valueClient,
  node: nodeClient,
  edge: edgeClient,
  graph: graphClient,
  type: typeClient,
  pointer: pointerClient,
};

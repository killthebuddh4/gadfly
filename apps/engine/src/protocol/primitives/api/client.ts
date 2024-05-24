import { client as valueClient } from "../value/api/client.js";
import { client as nodeClient } from "../node/api/client.js";
import { client as edgeClient } from "../edge/api/client.js";
import { client as graphClient } from "../graph/api/client.js";
import { client as pointerClient } from "../node/pointer/client.js";
import { client as typeClient } from "../type/api/client.js";

export const client = {
  value: valueClient,
  node: nodeClient,
  edge: edgeClient,
  graph: graphClient,
  pointer: pointerClient,
  type: typeClient,
};

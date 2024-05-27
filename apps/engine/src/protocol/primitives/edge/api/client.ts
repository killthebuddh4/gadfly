import { schemas } from "./schemas.js";
import { createApiClient } from "../../../../lib/api/createApiClient.js";

export const client = {
  create: createApiClient.writer(schemas.createEdge),
  read: createApiClient.reader(schemas.readEdge),
  from: { read: createApiClient.reader(schemas.readFrom) },
  to: { read: createApiClient.reader(schemas.readTo) },
  graph: { read: createApiClient.reader(schemas.readGraph) },
  type: { read: createApiClient.reader(schemas.readType) },
  value: { read: createApiClient.reader(schemas.readValue) },
  parents: { read: createApiClient.reader(schemas.readParents) },
  children: { read: createApiClient.reader(schemas.readChildren) },
  search: createApiClient.searcher(schemas.search),
};

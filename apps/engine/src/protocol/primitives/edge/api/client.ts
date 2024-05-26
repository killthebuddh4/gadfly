import { schemas } from "./schemas.js";
import { createApiClient } from "../../../../lib/api/createApiClient.js";

const createEdge = createApiClient.writer({
  path: "p/edge",
  body: schemas.zCreateEdge.shape.body,
  data: schemas.zCreateEdge.shape.data,
});

const readEdge = createApiClient.reader({
  path: (p) => `p/edge/${p.id}`,
  params: schemas.zReadEdge.shape.params,
  data: schemas.zReadEdge.shape.data,
});

const readFrom = createApiClient.reader({
  path: (p) => `p/edge/${p.id}/from`,
  params: schemas.zReadFrom.shape.params,
  data: schemas.zReadFrom.shape.data,
});

const readTo = createApiClient.reader({
  path: (p) => `p/edge/${p.id}/to`,
  params: schemas.zReadTo.shape.params,
  data: schemas.zReadTo.shape.data,
});

const readGraph = createApiClient.reader({
  path: (p) => `p/edge/${p.id}/graph`,
  params: schemas.zReadGraph.shape.params,
  data: schemas.zReadGraph.shape.data,
});

const readType = createApiClient.reader({
  path: (p) => `p/edge/${p.id}/type`,
  params: schemas.zReadType.shape.params,
  data: schemas.zReadType.shape.data,
});

const readValue = createApiClient.reader({
  path: (p) => `p/edge/${p.id}/value`,
  params: schemas.zReadValue.shape.params,
  data: schemas.zReadValue.shape.data,
});

const readParents = createApiClient.reader({
  path: (p) => `p/edge/${p.id}/parents`,
  params: schemas.zReadParents.shape.params,
  data: schemas.zReadParents.shape.data,
});

const readChildren = createApiClient.reader({
  path: (p) => `p/edge/${p.id}/children`,
  params: schemas.zReadChildren.shape.params,
  data: schemas.zReadChildren.shape.data,
});

const search = createApiClient.searcher({
  path: "p/edge",
  data: schemas.zSearch.shape.data,
});

export const client = {
  create: createEdge,
  read: readEdge,
  from: { read: readFrom },
  to: { read: readTo },
  graph: { read: readGraph },
  type: { read: readType },
  value: { read: readValue },
  parents: { read: readParents },
  children: { read: readChildren },
  search,
};

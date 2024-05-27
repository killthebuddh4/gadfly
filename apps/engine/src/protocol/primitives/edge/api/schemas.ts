import { z } from "zod";
import { schemas as apiSchemas } from "../../api/primitives.js";
import { reader } from "../../../../lib/api/Reader.js";
import { writer } from "../../../../lib/api/Writer.js";
import { searcher } from "../../../../lib/api/Searcher.js";

const createEdge = writer({
  name: "createEdge",
  request: {
    path: "/edge",
    body: apiSchemas.zEdge.omit({
      id: true,
      created_at: true,
      updated_at: true,
    }),
  },
  response: {
    body: apiSchemas.zEdge,
  },
});

const readEdge = reader({
  name: "readEdge",
  request: {
    path: (p) => `p/edge/${p.id}`,
    params: z.object({ id: z.string().uuid() }),
  },
  response: {
    body: apiSchemas.zEdge,
  },
});

const readFrom = reader({
  name: "readFrom",
  request: {
    path: (p) => `p/edge/${p.id}/from`,
    params: z.object({ id: z.string().uuid() }),
  },
  response: {
    body: apiSchemas.zNode,
  },
});

const readTo = reader({
  name: "readTo",
  request: {
    path: (p) => `p/edge/${p.id}/to`,
    params: z.object({ id: z.string().uuid() }),
  },
  response: {
    body: apiSchemas.zNode,
  },
});

const readGraph = reader({
  name: "readGraph",
  request: {
    path: (p) => `p/edge/${p.id}/graph`,
    params: z.object({ id: z.string().uuid() }),
  },
  response: {
    body: apiSchemas.zGraph,
  },
});

const readType = reader({
  name: "readType",
  request: {
    path: (p) => `p/edge/${p.id}/type`,
    params: z.object({ id: z.string().uuid() }),
  },
  response: {
    body: apiSchemas.zType,
  },
});

const readValue = reader({
  name: "readValue",
  request: {
    path: (p) => `p/edge/${p.id}/value`,
    params: z.object({ id: z.string().uuid() }),
  },
  response: {
    body: apiSchemas.zValue,
  },
});

const readParents = reader({
  name: "readParents",
  request: {
    path: (p) => `p/edge/${p.id}/parents`,
    params: z.object({ id: z.string().uuid() }),
  },
  response: {
    body: z.array(apiSchemas.zPointer),
  },
});

const readChildren = reader({
  name: "readChildren",
  request: {
    path: (p) => `p/edge/${p.id}/children`,
    params: z.object({ id: z.string().uuid() }),
  },
  response: {
    body: z.array(apiSchemas.zPointer),
  },
});

const search = searcher({
  name: "search",
  request: {
    path: "/edge",
  },
  response: {
    body: z.array(apiSchemas.zEdge),
  },
});

export const schemas = {
  createEdge,
  readEdge,
  readFrom,
  readTo,
  readGraph,
  readType,
  readValue,
  readParents,
  readChildren,
  search,
};

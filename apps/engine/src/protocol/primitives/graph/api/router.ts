import * as express from "express";
import { create as createGraph } from "../create.js";
import { read as readEdge } from "../read.js";
import { read as readNodes } from "../nodes/read.js";
import { read as readEdges } from "../edges/read.js";
import { read as readValue } from "../value/read.js";
import { read as readChildren } from "../children/read.js";
import { read as readParents } from "../parents/read.js";
import { read as readType } from "../type/read.js";
import { search } from "../search.js";
import { schemas } from "./schemas.js";
import { createReadHandler } from "../../../../lib/api/createReadHandler.js";
import { createWriteHandler } from "../../../../lib/api/createWriteHandler.js";

export const router = express.Router();

router.use(express.json());

createWriteHandler(schemas.create)({
  router,
  handler: async ({ data }) => createGraph(data),
});

createReadHandler(schemas.read)({
  router,
  handler: async ({ query }) => {
    return readEdge(query);
  },
});

createReadHandler(schemas.nodes.read)({
  router,
  handler: async ({ query }) => {
    return readNodes(query);
  },
});

createReadHandler(schemas.edges.read)({
  router,
  handler: async ({ query }) => {
    return readEdges(query);
  },
});

createReadHandler(schemas.type.read)({
  router,
  handler: async ({ query }) => {
    return readType(query);
  },
});

createReadHandler(schemas.value.read)({
  router,
  handler: async ({ query }) => {
    return readValue(query);
  },
});

createReadHandler(schemas.parents.read)({
  router,
  handler: async ({ query }) => {
    return readParents(query);
  },
});

createReadHandler(schemas.children.read)({
  router,
  handler: async ({ query }) => {
    return readChildren(query);
  },
});

createReadHandler(schemas.search)({
  router,
  handler: async () => {
    return search();
  },
});

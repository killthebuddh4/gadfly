import * as express from "express";
import { read } from "../read.js";
import { create } from "../create.js";
import { search } from "../search.js";
import { read as readChildren } from "../children/read.js";
import { read as readEdge } from "../edge/read.js";
import { read as readGraphs } from "../graph/read.js";
import { read as readNode } from "../node/read.js";
import { read as readParents } from "../parents/read.js";
import { read as readPointer } from "../pointer/read.js";
import { read as readType } from "../type/read.js";
import { read as readValue } from "../value/read.js";
import { schemas } from "./schemas.js";
import { createWriteHandler } from "../../../../lib/api/createWriteHandler.js";
import { createReadHandler } from "../../../../lib/api/createReadHandler.js";

export const router = express.Router();

router.use(express.json());

createWriteHandler(schemas.create)({
  router,
  handler: async ({ data }) => create(data),
});

createReadHandler(schemas.read)({
  router,
  handler: async ({ query }) => {
    return read(query);
  },
});

createReadHandler(schemas.search)({
  router,
  handler: async () => {
    return search();
  },
});

createReadHandler(schemas.children.read)({
  router,
  handler: async ({ query }) => {
    return readChildren(query);
  },
});

createReadHandler(schemas.edge.read)({
  router,
  handler: async ({ query }) => {
    return readEdge(query);
  },
});

createReadHandler(schemas.graph.read)({
  router,
  handler: async ({ query }) => {
    return readGraphs(query);
  },
});

createReadHandler(schemas.node.read)({
  router,
  handler: async ({ query }) => {
    return readNode(query);
  },
});

createReadHandler(schemas.parents.read)({
  router,
  handler: async ({ query }) => {
    return readParents(query);
  },
});

createReadHandler(schemas.pointer.read)({
  router,
  handler: async ({ query }) => {
    return readPointer(query);
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

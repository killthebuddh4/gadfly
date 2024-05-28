import express from "express";
import { create as createEdge } from "../create.js";
import { read as readEdge } from "../read.js";
import { read as readFrom } from "../from/read.js";
import { read as readTo } from "../to/read.js";
import { read as readGraph } from "../graph/read.js";
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
  handler: async ({ data }) => createEdge(data),
});

createReadHandler(schemas.read)({
  router,
  handler: async ({ query: params }) => {
    return readEdge(params);
  },
});

createReadHandler(schemas.from.read)({
  router,
  handler: async ({ query: params }) => {
    return readFrom(params);
  },
});

createReadHandler(schemas.to.read)({
  router,
  handler: async ({ query: params }) => {
    return readTo(params);
  },
});

createReadHandler(schemas.graph.read)({
  router,
  handler: async ({ query: params }) => {
    return readGraph(params);
  },
});

createReadHandler(schemas.type.read)({
  router,
  handler: async ({ query: params }) => {
    return readType(params);
  },
});

createReadHandler(schemas.value.read)({
  router,
  handler: async ({ query: params }) => {
    return readValue(params);
  },
});

createReadHandler(schemas.parents.read)({
  router,
  handler: async ({ query: params }) => {
    return readParents(params);
  },
});

createReadHandler(schemas.children.read)({
  router,
  handler: async ({ query: params }) => {
    return readChildren(params);
  },
});

createReadHandler(schemas.search)({
  router,
  handler: async () => {
    return search();
  },
});

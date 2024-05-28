import * as express from "express";
import { create } from "../create.js";
import { read } from "../read.js";
import { search } from "../search.js";
import { read as readUrl } from "../url/read.js";
import { read as readDescription } from "../description/read.js";
import { read as readChildren } from "../children/read.js";
import { read as readEdges } from "../edges/read.js";
import { read as readGraphs } from "../graphs/read.js";
import { read as readValues } from "../values/read.js";
import { read as readParents } from "../parents/read.js";
import { read as readNodes } from "../nodes/read.js";
import { read as readPointers } from "../pointers/read.js";
import { schemas } from "./schemas.js";
import { createReadHandler } from "../../../../lib/api/createReadHandler.js";
import { createWriteHandler } from "../../../../lib/api/createWriteHandler.js";

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
  handler: async ({ query }) => {
    return search();
  },
});

createReadHandler(schemas.url.read)({
  router,
  handler: async ({ query }) => {
    return readUrl(query);
  },
});

createReadHandler(schemas.description.read)({
  router,
  handler: async ({ query }) => {
    return readDescription(query);
  },
});

createReadHandler(schemas.children.read)({
  router,
  handler: async ({ query }) => {
    return readChildren(query);
  },
});

createReadHandler(schemas.edges.read)({
  router,
  handler: async ({ query }) => {
    return readEdges(query);
  },
});

createReadHandler(schemas.graphs.read)({
  router,
  handler: async ({ query }) => {
    return readGraphs(query);
  },
});

createReadHandler(schemas.values.read)({
  router,
  handler: async ({ query }) => {
    return readValues(query);
  },
});

createReadHandler(schemas.parents.read)({
  router,
  handler: async ({ query }) => {
    return readParents(query);
  },
});

createReadHandler(schemas.nodes.read)({
  router,
  handler: async ({ query }) => {
    return readNodes(query);
  },
});

createReadHandler(schemas.pointers.read)({
  router,
  handler: async ({ query }) => {
    return readPointers(query);
  },
});

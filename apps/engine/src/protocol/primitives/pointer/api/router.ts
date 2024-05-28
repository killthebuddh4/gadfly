import express from "express";
import { read } from "../read.js";
import { create } from "../create.js";
import { search } from "../search.js";
import { read as readParents } from "../parents/read.js";
import { read as readChildren } from "../children/read.js";
import { read as readFromNode } from "../from_node/read.js";
import { read as readFromEdge } from "../from_edge/read.js";
import { read as readFromGraph } from "../from_graph/read.js";
import { read as readFromType } from "../from_type/read.js";
import { read as readFromValue } from "../from_value/read.js";
import { read as readFromPointer } from "../from_pointer/read.js";
import { read as readToNode } from "../to_node/read.js";
import { read as readToEdge } from "../to_edge/read.js";
import { read as readToGraph } from "../to_graph/read.js";
import { read as readToType } from "../to_type/read.js";
import { read as readToValue } from "../to_value/read.js";
import { read as readToPointer } from "../to_pointer/read.js";
import { createReadHandler } from "../../../../lib/api/createReadHandler.js";
import { createWriteHandler } from "../../../../lib/api/createWriteHandler.js";
import { schemas } from "./schemas.js";

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

createReadHandler(schemas.from_node.read)({
  router,
  handler: async ({ query }) => {
    return readFromNode(query);
  },
});

createReadHandler(schemas.from_edge.read)({
  router,
  handler: async ({ query }) => {
    return readFromEdge(query);
  },
});

createReadHandler(schemas.from_graph.read)({
  router,
  handler: async ({ query }) => {
    return readFromGraph(query);
  },
});

createReadHandler(schemas.from_type.read)({
  router,
  handler: async ({ query }) => {
    return readFromType(query);
  },
});

createReadHandler(schemas.from_value.read)({
  router,
  handler: async ({ query }) => {
    return readFromValue(query);
  },
});

createReadHandler(schemas.from_pointer.read)({
  router,
  handler: async ({ query }) => {
    return readFromPointer(query);
  },
});

createReadHandler(schemas.to_node.read)({
  router,
  handler: async ({ query }) => {
    return readToNode(query);
  },
});

createReadHandler(schemas.to_edge.read)({
  router,
  handler: async ({ query }) => {
    return readToEdge(query);
  },
});

createReadHandler(schemas.to_graph.read)({
  router,
  handler: async ({ query }) => {
    return readToGraph(query);
  },
});

createReadHandler(schemas.to_type.read)({
  router,
  handler: async ({ query }) => {
    return readToType(query);
  },
});

createReadHandler(schemas.to_value.read)({
  router,
  handler: async ({ query }) => {
    return readToValue(query);
  },
});

createReadHandler(schemas.to_pointer.read)({
  router,
  handler: async ({ query }) => {
    return readToPointer(query);
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

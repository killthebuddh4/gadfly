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
import { createApiHandler } from "../../../../lib/api/createApiHandler.js";

export const router = express.Router();

router.use(express.json());

router.post(
  "/",
  createApiHandler.writer({
    defn: schemas.createEdge,
    handler: async ({ body }) => {
      return createEdge(body);
    },
  }),
);

router.get(
  "/:id",
  createApiHandler.reader({
    defn: schemas.readEdge,
    handler: async ({ query: params }) => {
      return readEdge(params);
    },
  }),
);

router.get(
  "/:id/from",
  createApiHandler.reader({
    defn: schemas.readFrom,
    handler: async ({ query: params }) => {
      return readFrom(params);
    },
  }),
);

router.get(
  "/:id/to",
  createApiHandler.reader({
    defn: schemas.readTo,
    handler: async ({ query: params }) => {
      return readTo(params);
    },
  }),
);

router.get(
  "/:id/graph",
  createApiHandler.reader({
    defn: schemas.readGraph,
    handler: async ({ query: params }) => {
      return readGraph(params);
    },
  }),
);

router.get(
  "/:id/type",
  createApiHandler.reader({
    defn: schemas.readType,
    handler: async ({ query: params }) => {
      return readType(params);
    },
  }),
);

router.get(
  "/:id/value",
  createApiHandler.reader({
    defn: schemas.readValue,
    handler: async ({ query: params }) => {
      return readValue(params);
    },
  }),
);

router.get(
  "/:id/parents",
  createApiHandler.reader({
    defn: schemas.readParents,
    handler: async ({ query: params }) => {
      return readParents(params);
    },
  }),
);

router.get(
  "/:id/children",
  createApiHandler.reader({
    defn: schemas.readChildren,
    handler: async ({ query: params }) => {
      return readChildren(params);
    },
  }),
);

router.get(
  "/",
  createApiHandler.searcher({
    defn: schemas.search,
    handler: async () => {
      return search();
    },
  }),
);

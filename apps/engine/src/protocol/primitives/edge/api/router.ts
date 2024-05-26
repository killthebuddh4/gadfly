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
    req: { body: schemas.zCreateEdge.shape.body },
    res: { body: schemas.zCreateEdge.shape.data },
    handler: async ({ body }) => {
      return createEdge(body);
    },
  }),
);

router.get(
  "/:id",
  createApiHandler.reader({
    req: { params: schemas.zReadEdge.shape.params },
    res: { body: schemas.zReadEdge.shape.data },
    handler: async ({ params }) => {
      return readEdge(params);
    },
  }),
);

router.get(
  "/:id/from",
  createApiHandler.reader({
    req: { params: schemas.zReadFrom.shape.params },
    res: { body: schemas.zReadFrom.shape.data },
    handler: async ({ params }) => {
      return readFrom(params);
    },
  }),
);

router.get(
  "/:id/to",
  createApiHandler.reader({
    req: { params: schemas.zReadTo.shape.params },
    res: { body: schemas.zReadTo.shape.data },
    handler: async ({ params }) => {
      return readTo(params);
    },
  }),
);

router.get(
  "/:id/graph",
  createApiHandler.reader({
    req: { params: schemas.zReadGraph.shape.params },
    res: { body: schemas.zReadGraph.shape.data },
    handler: async ({ params }) => {
      return readGraph(params);
    },
  }),
);

router.get(
  "/:id/value",
  createApiHandler.reader({
    req: { params: schemas.zReadValue.shape.params },
    res: { body: schemas.zReadValue.shape.data },
    handler: async ({ params }) => {
      return readValue(params);
    },
  }),
);

router.get(
  "/:id/parents",
  createApiHandler.reader({
    req: { params: schemas.zReadParents.shape.params },
    res: { body: schemas.zReadParents.shape.data },
    handler: async ({ params }) => {
      return readParents(params);
    },
  }),
);

router.get(
  "/:id/children",
  createApiHandler.reader({
    req: { params: schemas.zReadChildren.shape.params },
    res: { body: schemas.zReadChildren.shape.data },
    handler: async ({ params }) => {
      return readChildren(params);
    },
  }),
);

router.get(
  "/:id/type",
  createApiHandler.reader({
    req: { params: schemas.zReadType.shape.params },
    res: { body: schemas.zReadType.shape.data },
    handler: async ({ params }) => {
      return readType(params);
    },
  }),
);

router.get(
  "/",
  createApiHandler.searcher({
    res: { body: schemas.zSearch.shape.data },
    handler: async () => {
      return search();
    },
  }),
);

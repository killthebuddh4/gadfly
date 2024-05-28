import * as express from "express";
import { create } from "../create.js";
import { read } from "../read.js";
import { read as readUpstream } from "../upstream/read.js";
import { read as readDownstream } from "../downstream/read.js";
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
  handler: async ({ data }) => create(data),
});

createReadHandler(schemas.read)({
  router,
  handler: async ({ query }) => {
    return read(query);
  },
});

createReadHandler(schemas.upstream.read)({
  router,
  handler: async ({ query }) => {
    return readUpstream(query);
  },
});

createReadHandler(schemas.downstream.read)({
  router,
  handler: async ({ query }) => {
    return readDownstream(query);
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

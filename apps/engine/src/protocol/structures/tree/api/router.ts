import express from "express";
import { create } from "../create.js";
import { read } from "../read.js";
import { create as createPath } from "../path/create.js";
import { read as readPath } from "../path/read.js";
import { read as readPaths } from "../paths/read.js";
import { create as createBranch } from "../branch/create.js";
import { read as readBranch } from "../branch/read.js";
import { read as readBranches } from "../branches/read.js";
import { read as readLeaves } from "../leaves/read.js";
import { read as readRoot } from "../root/read.js";
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

createWriteHandler(schemas.path.create)({
  router,
  handler: async ({ data }) => createPath(data),
});

createReadHandler(schemas.path.read)({
  router,
  handler: async ({ query }) => {
    return readPath(query);
  },
});

createReadHandler(schemas.paths.read)({
  router,
  handler: async ({ query }) => {
    return readPaths(query);
  },
});

createWriteHandler(schemas.branch.create)({
  router,
  handler: async ({ data }) => createBranch(data),
});

createReadHandler(schemas.branch.read)({
  router,
  handler: async ({ query }) => {
    return readBranch(query);
  },
});

createReadHandler(schemas.branches.read)({
  router,
  handler: async ({ query }) => {
    return readBranches(query);
  },
});

createReadHandler(schemas.leaves.read)({
  router,
  handler: async ({ query }) => {
    return readLeaves(query);
  },
});

createReadHandler(schemas.root.read)({
  router,
  handler: async ({ query }) => {
    return readRoot(query);
  },
});

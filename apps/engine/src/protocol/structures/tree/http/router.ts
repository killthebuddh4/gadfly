import express from "express";
import { create } from "../create.js";
import { read } from "../read.js";
import { create as createPath } from "../atom/path/create.js";
import { read as readPath } from "../atom/path/read.js";
import { read as readPaths } from "../atom/paths/read.js";
import { create as createBranch } from "../atom/branch/create.js";
import { read as readBranch } from "../atom/branch/read.js";
import { read as readChildren } from "../atom/branch/derive/children/read.js";
import { read as readDepth } from "../atom/branch/derive/depth/read.js";
import { read as readParent } from "../atom/branch/derive/parent/read.js";
import { read as readTrace } from "../atom/branch/derive/trace/read.js";
import { read as readBranches } from "../atom/branches/read.js";
import { read as readLeaves } from "../atom/leaves/read.js";
import { read as readRoot } from "../derive/root/read.js";
import { expand } from "../transact/expand.js";
import { createReadHandler } from "../../../../lib/api/createReadHandler.js";
import { createWriteHandler } from "../../../../lib/api/createWriteHandler.js";
import { schemas } from "./schemas.js";

export const router = express.Router();

router.use(express.json());

createWriteHandler(schemas.primitives.create)({
  router,
  handler: async ({ data }) => create(data),
});

createReadHandler(schemas.primitives.read)({
  router,
  handler: async ({ query }) => {
    return read(query);
  },
});

createWriteHandler(schemas.primitives.path.create)({
  router,
  handler: async ({ data }) => createPath(data),
});

createReadHandler(schemas.primitives.path.read)({
  router,
  handler: async ({ query }) => {
    return readPath(query);
  },
});

createReadHandler(schemas.primitives.paths.read)({
  router,
  handler: async ({ query }) => {
    return readPaths(query);
  },
});

createWriteHandler(schemas.primitives.branch.primitives.create)({
  router,
  handler: async ({ data }) => createBranch(data),
});

createReadHandler(schemas.primitives.branch.primitives.read)({
  router,
  handler: async ({ query }) => {
    return readBranch(query);
  },
});

createReadHandler(schemas.primitives.branch.derivations.children.read)({
  router,
  handler: async ({ query }) => {
    return readChildren(query);
  },
});

createReadHandler(schemas.primitives.branch.derivations.depth.read)({
  router,
  handler: async ({ query }) => {
    return readDepth(query);
  },
});

createReadHandler(schemas.primitives.branch.derivations.parent.read)({
  router,
  handler: async ({ query }) => {
    return readParent(query);
  },
});

createReadHandler(schemas.primitives.branch.derivations.trace.read)({
  router,
  handler: async ({ query }) => {
    return readTrace(query);
  },
});

createReadHandler(schemas.primitives.branches.read)({
  router,
  handler: async ({ query }) => {
    return readBranches(query);
  },
});

createReadHandler(schemas.primitives.leaves.read)({
  router,
  handler: async ({ query }) => {
    return readLeaves(query);
  },
});

createReadHandler(schemas.derivations.root.read)({
  router,
  handler: async ({ query }) => {
    return readRoot(query);
  },
});

createWriteHandler(schemas.transactions.expand)({
  router,
  handler: async ({ data }) => expand(data),
});

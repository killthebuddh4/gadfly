import express from "express";
import { create } from "../create.js";
import { read } from "../read.js";
import { create as createTransition } from "../transition/create.js";
import { read as readTransition } from "../transition/read.js";
import { read as readTransitions } from "../transitions/read.js";
import { create as createPhase } from "../phase/create.js";
import { read as readPhase } from "../phase/read.js";
import { read as readPhases } from "../phases/read.js";
import { read as readTerminal } from "../terminal/read.js";
import { read as readInitial } from "../initial/read.js";
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

createWriteHandler(schemas.transition.create)({
  router,
  handler: async ({ data }) => createTransition(data),
});

createReadHandler(schemas.transition.read)({
  router,
  handler: async ({ query }) => {
    return readTransition(query);
  },
});

createReadHandler(schemas.transitions.read)({
  router,
  handler: async ({ query }) => {
    return readTransitions(query);
  },
});

createWriteHandler(schemas.phase.create)({
  router,
  handler: async ({ data }) => createPhase(data),
});

createReadHandler(schemas.phase.read)({
  router,
  handler: async ({ query }) => {
    return readPhase(query);
  },
});

createReadHandler(schemas.phases.read)({
  router,
  handler: async ({ query }) => {
    return readPhases(query);
  },
});

createReadHandler(schemas.terminal.read)({
  router,
  handler: async ({ query }) => {
    return readTerminal(query);
  },
});

createReadHandler(schemas.initial.read)({
  router,
  handler: async ({ query }) => {
    return readInitial(query);
  },
});

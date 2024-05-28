import express from "express";
import { create } from "../create.js";
import { read } from "../read.js";
import { search } from "../search.js";
import { create as createSignal } from "../signal/create.js";
import { read as readSignal } from "../signal/read.js";
import { read as readSignals } from "../signals/read.js";
import { create as createContext } from "../context/create.js";
import { read as readContext } from "../context/read.js";
import { read as readContexts } from "../contexts/read.js";
import { read as readTerminal } from "../terminal/read.js";
import { read as readInitial } from "../initial/read.js";
import { createReadHandler } from "../../../../../lib/api/createReadHandler.js";
import { createWriteHandler } from "../../../../../lib/api/createWriteHandler.js";
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

createReadHandler(schemas.search.read)({
  router,
  handler: async () => {
    return search();
  },
});

createWriteHandler(schemas.signal.create)({
  router,
  handler: async ({ data }) => createSignal(data),
});

createReadHandler(schemas.signal.read)({
  router,
  handler: async ({ query }) => {
    return readSignal(query);
  },
});

createReadHandler(schemas.signals.read)({
  router,
  handler: async ({ query }) => {
    return readSignals(query);
  },
});

createWriteHandler(schemas.context.create)({
  router,
  handler: async ({ data }) => createContext(data),
});

createReadHandler(schemas.context.read)({
  router,
  handler: async ({ query }) => {
    return readContext(query);
  },
});

createReadHandler(schemas.contexts.read)({
  router,
  handler: async ({ query }) => {
    return readContexts(query);
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

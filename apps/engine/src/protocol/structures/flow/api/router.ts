import express from "express";
import { create } from "../create.js";
import { read } from "../read.js";
import { create as createChannel } from "../channel/create.js";
import { read as readChannel } from "../channel/read.js";
import { read as readChannels } from "../channels/read.js";
import { create as createState } from "../state/create.js";
import { read as readState } from "../state/read.js";
import { read as readStates } from "../states/read.js";
import { read as readHeads } from "../heads/read.js";
import { read as readTails } from "../tails/read.js";
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

createWriteHandler(schemas.channel.create)({
  router,
  handler: async ({ data }) => createChannel(data),
});

createReadHandler(schemas.channel.read)({
  router,
  handler: async ({ query }) => {
    return readChannel(query);
  },
});

createReadHandler(schemas.channels.read)({
  router,
  handler: async ({ query }) => {
    return readChannels(query);
  },
});

createWriteHandler(schemas.state.create)({
  router,
  handler: async ({ data }) => createState(data),
});

createReadHandler(schemas.state.read)({
  router,
  handler: async ({ query }) => {
    return readState(query);
  },
});

createReadHandler(schemas.states.read)({
  router,
  handler: async ({ query }) => {
    return readStates(query);
  },
});

createReadHandler(schemas.heads.read)({
  router,
  handler: async ({ query }) => {
    return readHeads(query);
  },
});

createReadHandler(schemas.tails.read)({
  router,
  handler: async ({ query }) => {
    return readTails(query);
  },
});

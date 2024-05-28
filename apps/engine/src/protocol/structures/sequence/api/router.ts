import express from "express";
import { create } from "../create.js";
import { read } from "../read.js";
import { create as createIterator } from "../iterator/create.js";
import { read as readIterator } from "../iterator/read.js";
import { read as readIterators } from "../iterators/read.js";
import { create as createElement } from "../element/create.js";
import { read as readElement } from "../element/read.js";
import { read as readElements } from "../elements/read.js";
import { read as readLast } from "../last/read.js";
import { read as readFirst } from "../first/read.js";
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

createWriteHandler(schemas.iterator.create)({
  router,
  handler: async ({ data }) => createIterator(data),
});

createReadHandler(schemas.iterator.read)({
  router,
  handler: async ({ query }) => {
    return readIterator(query);
  },
});

createReadHandler(schemas.iterators.read)({
  router,
  handler: async ({ query }) => {
    return readIterators(query);
  },
});

createWriteHandler(schemas.element.create)({
  router,
  handler: async ({ data }) => createElement(data),
});

createReadHandler(schemas.element.read)({
  router,
  handler: async ({ query }) => {
    return readElement(query);
  },
});

createReadHandler(schemas.elements.read)({
  router,
  handler: async ({ query }) => {
    return readElements(query);
  },
});

createReadHandler(schemas.last.read)({
  router,
  handler: async ({ query }) => {
    return readLast(query);
  },
});

createReadHandler(schemas.first.read)({
  router,
  handler: async ({ query }) => {
    return readFirst(query);
  },
});

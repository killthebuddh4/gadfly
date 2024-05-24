import * as express from "express";
import { create as createSequence } from "../create.js";
import { read as readSequence } from "../read.js";
import { create as createIterator } from "../iterator/create.js";
import { read as readIterator } from "../iterator/read.js";
import { read as readIterators } from "../iterators/read.js";
import { create as createElement } from "../element/create.js";
import { read as readElement } from "../element/read.js";
import { read as readElements } from "../elements/read.js";
import { read as readLast } from "../last/read.js";
import { read as readFirst } from "../first/read.js";
import {
  zCreateSequenceBody,
  zCreateSequenceData,
  zCreateIteratorParams,
  zCreateIteratorBody,
  zReadIteratorParams,
  zReadIteratorData,
  zReadIteratorsParams,
  zCreateElementBody,
  zCreateElementParams,
  zReadElementParams,
  zReadIteratorsData,
  zReadLastData,
  zReadLastParams,
  zReadElementData,
  zReadElementsData,
  zReadElementsParams,
  zReadFirstData,
  zReadFirstParams,
  zReadSequenceData,
} from "./schemas.js";

export const router = express.Router();

router.use(express.json());

router.post("/", async (req, res) => {
  let body;
  try {
    body = zCreateSequenceBody.parse(req.body);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid body" });
    return;
  }

  let data;
  try {
    data = await createSequence(body);
  } catch (error) {
    res.status(500).json({ ok: false, error: `createFirst failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zCreateSequenceData.parse(data) });
  } catch {
    res
      .status(500)
      .json({ ok: false, error: "zCreateSequenceData.parse failed" });
  }
});

router.get("/:id", async (req, res) => {
  let params;
  try {
    params = zReadSequenceData.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readSequence({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readSequence failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadSequenceData.parse(data) });
  } catch {
    res
      .status(500)
      .json({ ok: false, error: "zReadSequenceData.parse failed" });
  }
});

router.post("/iterator", async (req, res) => {
  let params;
  try {
    params = zCreateIteratorParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let body;
  try {
    body = zCreateIteratorBody.parse(req.body);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid body" });
    return;
  }

  let data;
  try {
    data = await createIterator(body);
  } catch (error) {
    res.status(500).json({ ok: false, error: `createIterator failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadIteratorData.parse(data) });
  } catch {
    res
      .status(500)
      .json({ ok: false, error: "zReadIteratorData.parse failed" });
  }
});

router.get("/:id/iterators", async (req, res) => {
  let params;
  try {
    params = zReadIteratorsParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readIterators({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readIterators failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadIteratorsData.parse(data) });
  } catch {
    res
      .status(500)
      .json({ ok: false, error: "zReadIteratorsData.parse failed" });
  }
});

router.get("/iterator/:id", async (req, res) => {
  let params;
  try {
    params = zReadIteratorParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readIterator({
      id: params.id,
    });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readIterator failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadIteratorData.parse(data) });
  } catch {
    res
      .status(500)
      .json({ ok: false, error: "zReadIteratorData.parse failed" });
  }
});

router.post("/element", async (req, res) => {
  let params;
  try {
    params = zCreateElementParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let body;
  try {
    body = zCreateElementBody.parse(req.body);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid body" });
    return;
  }

  let data;
  try {
    data = await createElement(body);
  } catch (error) {
    res.status(500).json({ ok: false, error: `createElement failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadElementData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadElementData.parse failed" });
  }
});

router.get("/element/:id", async (req, res) => {
  let params;
  try {
    params = zReadElementParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readElement({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readElement failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadElementData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadElementData.parse failed" });
  }
});

router.get("/:id/Elements", async (req, res) => {
  let params;
  try {
    params = zReadElementsParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readElements({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readElements failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadElementsData.parse(data) });
  } catch {
    res
      .status(500)
      .json({ ok: false, error: "zReadElementsData.parse failed" });
  }
});

router.get("/:id/last", async (req, res) => {
  let params;
  try {
    params = zReadLastParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readLast({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readLast failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadLastData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadLastData.parse failed" });
  }
});

router.get("/:id/first", async (req, res) => {
  let params;
  try {
    params = zReadFirstParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readFirst({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readFirst failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadFirstData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadFirstData.parse failed" });
  }
});

import express from "express";
import { z } from "zod";
import { create as createRoot } from "./root/create.js";
import { read as readRoot } from "./root/read.js";
import { interpret as interpretRoot } from "./root/interpret.js";
import { read as readEdges } from "./edges/read.js";
import { interpret as interpretEdges } from "./edges/interpret.js";
import { read as readNodes } from "./nodes/read.js";
import { interpret as interpretNodes } from "./nodes/interpret.js";
import { read as readValue } from "./value/read.js";
import { interpret as interpretValue } from "./value/interpret.js";
import { search } from "./search.js";
import { read as readChildren } from "./children/read.js";
import { read as readParents } from "./parents/read.js";
import { read as readType } from "./type/read.js";
import {
  zReadChildrenData,
  zReadChildrenParams,
  zReadParentsData,
  zReadParentsParams,
  zSearchData,
  zCreateRootBody,
  zCreateRootData,
  zReadEdgesData,
  zReadEdgesParams,
  zReadNodesData,
  zReadNodesParams,
  zReadRootData,
  zReadRootParams,
  zReadTypeData,
  zReadTypeParams,
} from "./schemas.js";

export const router = express.Router();

router.use(express.json());

router.post("/", async (req, res) => {
  const body = zCreateRootBody.parse(req.body);
  const data = await createRoot(body);

  res.json({ ok: true, data: zCreateRootData.parse(data) });
});

router.get("/:id", async (req, res) => {
  let params;
  try {
    params = zReadRootParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  const data = await readRoot({ id: params.id });

  try {
    res.json({ ok: true, data: zReadRootData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadRootData.parse failed" });
  }
});

const zInterpretRootParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/interpret", async (req, res) => {
  const params = zInterpretRootParams.parse(req.params);
  const data = await interpretRoot({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/edges", async (req, res) => {
  const params = zReadEdgesParams.parse(req.params);
  const data = await readEdges({ id: params.id });

  res.json({ ok: true, data: zReadEdgesData.parse(data) });
});

const zInterpretEdgesParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/edges/interpret", async (req, res) => {
  const params = zInterpretEdgesParams.parse(req.params);
  const data = await interpretEdges({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/nodes", async (req, res) => {
  const params = zReadNodesParams.parse(req.params);
  const data = await readNodes({ id: params.id });

  res.json({ ok: true, data: zReadNodesData.parse(data) });
});

const zInterpretNodesParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/nodes/interpret", async (req, res) => {
  const params = zInterpretNodesParams.parse(req.params);
  const data = await interpretNodes({ id: params.id });

  res.json({ ok: true, data });
});

const zReadValueParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/value", async (req, res) => {
  const params = zReadValueParams.parse(req.params);
  const data = await readValue({ id: params.id });

  res.json({ ok: true, data });
});

const zInterpretValueParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/value/interpret", async (req, res) => {
  const params = zInterpretValueParams.parse(req.params);
  const data = await interpretValue({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/", async (req, res) => {
  const data = await search();

  res.json({ ok: true, data: zSearchData.parse(data) });
});

router.get("/:id/parents", async (req, res) => {
  let params;
  try {
    params = zReadParentsParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readParents({ id: params.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: "readParents failed" });
    return;
  }

  try {
    res.json({ ok: true, data: zReadParentsData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadParentsData.parse failed" });
  }
});

router.get("/:id/children", async (req, res) => {
  let params;
  try {
    params = zReadChildrenParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readChildren({ id: params.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: "readChildren failed" });
    return;
  }

  try {
    res.json({ ok: true, data: zReadChildrenData.parse(data) });
  } catch {
    res
      .status(500)
      .json({ ok: false, error: "zReadChildrenData.parse failed" });
  }
});

router.get("/:id/type", async (req, res) => {
  let params;
  try {
    params = zReadTypeParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  const data = await readType({ id: params.id });

  try {
    res.json({ ok: true, data: zReadTypeData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadTypeData.parse failed" });
  }
});

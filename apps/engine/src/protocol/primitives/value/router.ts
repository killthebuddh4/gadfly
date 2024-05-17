import express from "express";
import { create as createRoot } from "./root/create.js";
import { read as readRoot } from "./root/read.js";
import { interpret as interpretRoot } from "./root/interpret.js";
import { read as readValue } from "./value/read.js";
import { interpret as interpretValue } from "./value/interpret.js";
import { read as readParents } from "./parents/read.js";
import { read as readChildren } from "./children/read.js";
import { read as readEdge } from "./edge/read.js";
import { read as readGraph } from "./graph/read.js";
import { read as readNode } from "./node/read.js";
import { read as readPointer } from "./pointer/read.js";
import { search } from "./search.js";
import {
  zSearchData,
  zCreateRootData,
  zReadRootData,
  zReadChildrenData,
  zReadChildrenParams,
  zReadParentsData,
  zReadParentsParams,
  zCreateRootBody,
  zReadRootParams,
  zInterpretRootParams,
  zReadValueParams,
  zInterpretValueParams,
  zReadEdgeData,
  zReadEdgeParams,
  zReadGraphData,
  zReadGraphParams,
  zReadNodeData,
  zReadNodeParams,
  zReadPointerData,
  zReadPointerParams,
} from "./schemas.js";

export const router = express.Router();

router.use(express.json());

router.post("/", async (req, res) => {
  const body = zCreateRootBody.parse(req.body);
  const data = await createRoot({ value: body.value });

  res.json({ ok: true, data: zCreateRootData.parse(data) });
});

router.get("/:id", async (req, res) => {
  const params = zReadRootParams.parse(req.params);
  const data = await readRoot({ id: params.id });

  res.json({ ok: true, data: zReadRootData.parse(data) });
});

router.get("/:id/interpret", async (req, res) => {
  const params = zInterpretRootParams.parse(req.params);
  const data = await interpretRoot({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/value", async (req, res) => {
  const params = zReadValueParams.parse(req.params);
  const data = await readValue({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/value/interpret", async (req, res) => {
  const params = zInterpretValueParams.parse(req.params);
  const data = await interpretValue({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/parents", async (req, res) => {
  const params = zReadParentsParams.parse(req.params);
  const data = await readParents({ id: params.id });

  res.json({ ok: true, data: zReadParentsData.parse(data) });
});

router.get("/:id/children", async (req, res) => {
  const params = zReadChildrenParams.parse(req.params);
  const data = await readChildren({ id: params.id });

  res.json({ ok: true, data: zReadChildrenData.parse(data) });
});

router.get("/:id/edge", async (req, res) => {
  const params = zReadEdgeParams.parse(req.params);
  const data = await readEdge({ id: params.id });

  res.json({ ok: true, data: zReadEdgeData.parse(data) });
});

router.get("/:id/graph", async (req, res) => {
  const params = zReadGraphParams.parse(req.params);
  const data = await readGraph({ id: params.id });

  res.json({ ok: true, data: zReadGraphData.parse(data) });
});

router.get("/:id/node", async (req, res) => {
  const params = zReadNodeParams.parse(req.params);
  const data = await readNode({ id: params.id });

  res.json({ ok: true, data: zReadNodeData.parse(data) });
});

router.get("/:id/pointer", async (req, res) => {
  const params = zReadPointerParams.parse(req.params);
  const data = await readPointer({ id: params.id });

  res.json({ ok: true, data: zReadPointerData.parse(data) });
});

router.get("/", async (req, res) => {
  const data = await search();

  res.json({ ok: true, data: zSearchData.parse(data) });
});

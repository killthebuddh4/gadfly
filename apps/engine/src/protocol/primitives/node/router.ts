import express from "express";
import { z } from "zod";
import { create as createRoot } from "./root/create.js";
import { read as readRoot } from "./root/read.js";
import { interpret as interpretRoot } from "./root/interpret.js";
import { read as readGraph } from "./graph/read.js";
import { interpret as interpretGraph } from "./graph/interpret.js";
import { read as readType } from "./type/read.js";
import { interpret as interpretType } from "./type/interpret.js";
import { read as readValue } from "./value/read.js";
import { interpret as interpretValue } from "./value/interpret.js";
import { read as readUpstream } from "./upstream/read.js";
import { interpret as interpretUpstream } from "./upstream/interpret.js";
import { read as readDownstream } from "./downstream/read.js";
import { interpret as interpretDownstream } from "./downstream/interpret.js";
import {
  zCreateRootBody,
  zCreateRootData,
  zReadRootParams,
  zReadRootData,
  zInterpretRootParams,
  zReadGraphParams,
  zInterpretGraphParams,
  zReadTypeParams,
  zInterpretTypeParams,
  zReadValueParams,
  zInterpretValueParams,
  zReadUpstreamParams,
  zReadUpstreamData,
  zInterpretUpstreamParams,
  zReadDownstreamParams,
  zReadDownstreamData,
  zInterpretDownstreamParams,
} from "./schemas.js";

export const router = express.Router();

router.use(express.json());

router.post("/", async (req, res) => {
  const body = zCreateRootBody.parse(req.body);
  const data = await createRoot({
    graph: body.graph,
    type: body.type,
    value: body.value,
  });

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

router.get("/:id/graph", async (req, res) => {
  const params = zReadGraphParams.parse(req.params);
  const data = await readGraph({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/graph/interpret", async (req, res) => {
  const params = zInterpretGraphParams.parse(req.params);
  const data = await interpretGraph({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/type", async (req, res) => {
  const params = zReadTypeParams.parse(req.params);
  const data = await readType({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/type/interpret", async (req, res) => {
  const params = zInterpretTypeParams.parse(req.params);
  const data = await interpretType({ id: params.id });

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

router.get("/:id/upstream", async (req, res) => {
  const params = zReadUpstreamParams.parse(req.params);
  const data = await readUpstream({ id: params.id });

  res.json({ ok: true, data: zReadUpstreamData.parse(data) });
});

router.get("/:id/upstream/interpret", async (req, res) => {
  const params = zInterpretUpstreamParams.parse(req.params);
  const data = await interpretUpstream({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/downstream", async (req, res) => {
  const params = zReadDownstreamParams.parse(req.params);
  const data = await readDownstream({ id: params.id });

  res.json({ ok: true, data: zReadDownstreamData.parse(data) });
});

router.get("/:id/downstream/interpret", async (req, res) => {
  const params = zInterpretDownstreamParams.parse(req.params);
  const data = await interpretDownstream({ id: params.id });

  res.json({ ok: true, data });
});

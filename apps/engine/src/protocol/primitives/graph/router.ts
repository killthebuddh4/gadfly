import express from "express";
import { z } from "zod";
import { create as createRoot } from "./root/create.js";
import { read as readRoot } from "./root/read.js";
import { interpret as interpretRoot } from "./root/interpret.js";
import { read as readEdges } from "./edges/read.js";
import { interpret as interpretEdges } from "./edges/interpret.js";
import { read as readNodes } from "./nodes/read.js";
import { interpret as interpretNodes } from "./nodes/interpret.js";
import { read as readType } from "./type/read.js";
import { interpret as interpretType } from "./type/interpret.js";
import { read as readValue } from "./value/read.js";
import { interpret as interpretValue } from "./value/interpret.js";
import {
  zCreateRootBody,
  zCreateRootData,
  zReadEdgesData,
  zReadEdgesParams,
  zReadNodesData,
  zReadNodesParams,
  zReadRootData,
  zReadRootParams,
} from "./schemas.js";

export const router = express.Router();

router.use(express.json());

router.post("/", async (req, res) => {
  const body = zCreateRootBody.parse(req.body);

  const data = await createRoot({
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

const zReadTypeParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/type", async (req, res) => {
  const params = zReadTypeParams.parse(req.params);
  const data = await readType({ id: params.id });

  res.json({ ok: true, data });
});

const zInterpretTypeParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/type/interpret", async (req, res) => {
  const params = zInterpretTypeParams.parse(req.params);
  const data = await interpretType({ id: params.id });

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

import express from "express";
import { prisma } from "../../../../lib/prisma.js";
import { z } from "zod";
import { read } from "./read.js";
import { create } from "./create.js";
import { heads } from "./heads.js";
import { tails } from "./tails.js";
import { upstream } from "./upstream.js";
import { downstream } from "./downstream.js";
import { setValue } from "./setValue.js";
import { setNode } from "./setNode.js";
import { setGraph } from "./setGraph.js";
import { setEdge } from "./setEdge.js";
import { setGeneration } from "./setGeneration.js";
import { setType } from "./setType.js";

export const router = express.Router();

router.use(express.json());

const zGetParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id", async (req, res) => {
  const params = zGetParams.parse(req.params);
  const data = await read({ id: params.id });

  res.json({ ok: true, data });
});

const zCreateBody = z.object({
  from: z.string().uuid(),
});

router.post("/", async (req, res) => {
  const body = zCreateBody.parse(req.body);
  const data = await create({ from: body.from });

  res.json({ ok: true, data });
});

const zSetValueParams = z.object({
  id: z.string().uuid(),
});

const zSetValueBody = z.object({
  value: z.string().uuid(),
});

router.post("/:id/value", async (req, res) => {
  const params = zSetValueParams.parse(req.params);
  const body = zSetValueBody.parse(req.body);
  const data = await setValue({ id: params.id, value: body.value });

  res.json({ ok: true, data });
});

const zSetTypeParams = z.object({
  id: z.string().uuid(),
});

const zSetTypeBody = z.object({
  type: z.string().uuid(),
});

router.post("/:id/type", async (req, res) => {
  const params = zSetTypeParams.parse(req.params);
  const body = zSetTypeBody.parse(req.body);
  const data = await setType({ id: params.id, type: body.type });

  res.json({ ok: true, data });
});

const zSetNodeParams = z.object({
  id: z.string().uuid(),
});

const zSetNodeBody = z.object({
  node: z.string().uuid(),
});

router.post("/:id/node", async (req, res) => {
  const params = zSetNodeParams.parse(req.params);
  const body = zSetNodeBody.parse(req.body);
  const data = await setNode({ id: params.id, node: body.node });

  res.json({ ok: true, data });
});

const zSetGraphParams = z.object({
  id: z.string().uuid(),
});

const zSetGraphBody = z.object({
  graph: z.string().uuid(),
});

router.post("/:id/graph", async (req, res) => {
  const params = zSetGraphParams.parse(req.params);
  const body = zSetGraphBody.parse(req.body);
  const data = await setGraph({ id: params.id, graph: body.graph });

  res.json({ ok: true, data });
});

const zSetEdgeParams = z.object({
  id: z.string().uuid(),
});

const zSetEdgeBody = z.object({
  edge: z.string().uuid(),
});

router.post("/:id/edge", async (req, res) => {
  const params = zSetEdgeParams.parse(req.params);
  const body = zSetEdgeBody.parse(req.body);
  const data = await setEdge({ id: params.id, edge: body.edge });

  res.json({ ok: true, data });
});

const zSetGenerationParams = z.object({
  id: z.string().uuid(),
});

const zSetGenerationBody = z.object({
  generation: z.string().uuid(),
});

router.post("/:id/generation", async (req, res) => {
  const params = zSetGenerationParams.parse(req.params);
  const body = zSetGenerationBody.parse(req.body);
  const data = await setGeneration({
    id: params.id,
    generation: body.generation,
  });

  res.json({ ok: true, data });
});

const zDownstreamParams = z.object({
  id: z.string().uuid(),
});

router.get("/downstream", async (req, res) => {
  const params = zDownstreamParams.parse(req.query);
  const data = await downstream({ id: params.id });

  res.json({ ok: true, data });
});

const zUpstreamParams = z.object({
  id: z.string().uuid(),
});

router.get("/upstream", async (req, res) => {
  const params = zUpstreamParams.parse(req.query);
  const data = await upstream({ id: params.id });

  res.json({ ok: true, data });
});

const zHeadsParams = z.object({
  ids: z.array(z.string().uuid()),
});

router.get("/heads", async (req, res) => {
  const params = zHeadsParams.parse(req.query);
  const data = await heads({ ids: params.ids });

  res.json({ ok: true, data });
});

const zTailsParams = z.object({
  ids: z.array(z.string().uuid()),
});

router.get("/tails", async (req, res) => {
  const params = zTailsParams.parse(req.query);
  const data = await tails({ ids: params.ids });

  res.json({ ok: true, data });
});

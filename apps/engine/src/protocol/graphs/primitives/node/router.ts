import express from "express";
import { z } from "zod";
import { create } from "./create.js";
import { setValue } from "./setValue.js";
import { read } from "./read.js";
import { downstream } from "./downstream.js";
import { upstream } from "./upstream.js";
import { graph } from "./graph.js";
import { type } from "./type.js";
import { value } from "./value.js";

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
  graph: z.string().uuid(),
  type: z.string().uuid(),
});

router.post("/", async (req, res) => {
  const body = zCreateBody.parse(req.body);

  const data = await create({ graph: body.graph, type: body.type });

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

const zDownstreamParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/downstream", async (req, res) => {
  const params = zDownstreamParams.parse(req.params);
  const data = await downstream({ id: params.id });

  res.json({ ok: true, data });
});

const zUpstreamParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/upstream", async (req, res) => {
  const params = zUpstreamParams.parse(req.params);
  const data = await upstream({ id: params.id });

  res.json({ ok: true, data });
});

const zGraphParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/graph", async (req, res) => {
  const params = zGraphParams.parse(req.params);
  const data = await graph({ id: params.id });

  res.json({ ok: true, data });
});

const zTypeParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/type", async (req, res) => {
  const params = zTypeParams.parse(req.params);
  const data = await type({ id: params.id });

  res.json({ ok: true, data });
});

const zValueParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/value", async (req, res) => {
  const params = zValueParams.parse(req.params);
  const data = await value({ id: params.id });

  res.json({ ok: true, data });
});

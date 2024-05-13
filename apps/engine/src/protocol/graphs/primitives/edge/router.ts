import express from "express";
import { create } from "./create.js";
import { read } from "./read.js";
import { setTo } from "./setTo.js";
import { setValue } from "./setValue.js";
import { downstream } from "./downstream.js";
import { upstream } from "./upstream.js";
import { heads } from "./heads.js";
import { tails } from "./tails.js";
import { z } from "zod";

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
  from: z.string().uuid(),
  type: z.string().uuid(),
  generation: z.string().uuid(),
});

router.post("/", async (req, res) => {
  const body = zCreateBody.parse(req.body);

  const data = await create({
    graph: body.graph,
    from: body.from,
    type: body.type,
    generation: body.generation,
  });

  res.json({ ok: true, data });
});

const zSetToParams = z.object({
  id: z.string().uuid(),
});

const zSetToBody = z.object({
  to: z.string().uuid(),
});

router.post("/:id/to", async (req, res) => {
  const params = zSetToParams.parse(req.params);
  const body = zSetToBody.parse(req.body);

  const data = await setTo({
    id: params.id,
    to: body.to,
  });

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

  const data = await setValue({
    id: params.id,
    value: body.value,
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
  id: z.string().uuid(),
});

router.get("/heads", async (req, res) => {
  const params = zHeadsParams.parse(req.query);
  const data = await heads({ id: params.id });

  res.json({ ok: true, data });
});

const zTailsParams = z.object({
  id: z.string().uuid(),
});

router.get("/tails", async (req, res) => {
  const params = zTailsParams.parse(req.query);
  const data = await tails({ id: params.id });

  res.json({ ok: true, data });
});

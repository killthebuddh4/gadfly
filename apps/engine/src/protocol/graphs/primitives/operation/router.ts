import express from "express";
import { z } from "zod";
import { create } from "./create.js";
import { setValue } from "./setValue.js";
import { read } from "./read.js";
import { edges } from "./edges.js";
import { type } from "./type.js";

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
  type: z.string().uuid(),
});

router.post("/", async (req, res) => {
  const body = zCreateBody.parse(req.body);
  const data = await create({ type: body.type });

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

const zEdgesParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/edges", async (req, res) => {
  const params = zEdgesParams.parse(req.params);
  const data = await edges({ id: params.id });

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

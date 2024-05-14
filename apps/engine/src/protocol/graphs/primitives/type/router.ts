import express from "express";
import { z } from "zod";
import { create as createRoot } from "./root/create.js";
import { read as readRoot } from "./root/read.js";
import { interpret as interpretRoot } from "./root/interpret.js";
import { read as readCode } from "./code/read.js";
import { interpret as interpretCode } from "./code/interpret.js";
import { read as readDescription } from "./description/read.js";
import { interpret as interpretDescription } from "./description/interpret.js";

export const router = express.Router();

router.use(express.json());

const zCreateRootBody = z.object({
  code: z.number().int().positive(),
  description: z.string(),
});

router.post("/", async (req, res) => {
  const body = zCreateRootBody.parse(req.body);
  const data = await createRoot({
    code: body.code,
    description: body.description,
  });

  res.json({ ok: true, data });
});

const zReadRootParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id", async (req, res) => {
  const params = zReadRootParams.parse(req.params);
  const data = await readRoot({ id: params.id });

  res.json({ ok: true, data });
});

const zInterpretRootParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/interpret", async (req, res) => {
  const params = zInterpretRootParams.parse(req.params);
  const data = await interpretRoot({ id: params.id });

  res.json({ ok: true, data });
});

const zReadCodeParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/code", async (req, res) => {
  const params = zReadCodeParams.parse(req.params);
  const data = await readCode({ id: params.id });

  res.json({ ok: true, data });
});

const zInterpretCodeParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/code/interpret", async (req, res) => {
  const params = zInterpretCodeParams.parse(req.params);
  const data = await interpretCode({ id: params.id });

  res.json({ ok: true, data });
});

const zReadDescriptionParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/description", async (req, res) => {
  const params = zReadDescriptionParams.parse(req.params);
  const data = await readDescription({ id: params.id });

  res.json({ ok: true, data });
});

const zWriteDescriptionParams = z.object({
  id: z.string().uuid(),
});

const zInterpretDescriptionParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/description/interpret", async (req, res) => {
  const params = zInterpretDescriptionParams.parse(req.params);
  const data = await interpretDescription({ id: params.id });

  res.json({ ok: true, data });
});

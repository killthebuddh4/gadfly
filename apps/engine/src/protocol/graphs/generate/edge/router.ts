import express from "express";
import { next } from "./next.js";
import { to } from "./to.js";
import { value } from "./value.js";

import { z } from "zod";

export const router = express.Router();

router.use(express.json());

const zNextParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id", async (req, res) => {
  const params = zNextParams.parse(req.params);
  const data = await next({ id: params.id });

  res.json({ ok: true, data });
});

const zGenerateToParams = z.object({
  id: z.string().uuid(),
});

router.post("/:id/to", async (req, res) => {
  const params = zGenerateToParams.parse(req.params);
  const data = await to({ id: params.id });

  res.json({ ok: true, data });
});

const zGenerateValueParams = z.object({
  id: z.string().uuid(),
});

router.post("/:id/value", async (req, res) => {
  const params = zGenerateValueParams.parse(req.params);
  const data = await value({ id: params.id });

  res.json({ ok: true, data });
});

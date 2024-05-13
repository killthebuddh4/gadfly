import express from "express";
import { next } from "./next.js";
import { value } from "./value.js";
import { nodes } from "./nodes.js";

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

const zGenerateValueParams = z.object({
  id: z.string().uuid(),
  value: z.string().uuid(),
});

router.post("/:id/value", async (req, res) => {
  const params = zGenerateValueParams.parse(req.params);
  const data = await value({ id: params.id });

  res.json({ ok: true, data });
});

const zGenerateTailsParams = z.object({
  id: z.string().uuid(),
});

router.post("/:id/tails", async (req, res) => {
  const params = zGenerateTailsParams.parse({ ...req.params, ...req.body });
  const data = await nodes({ id: params.id });

  res.json({ ok: true, data });
});

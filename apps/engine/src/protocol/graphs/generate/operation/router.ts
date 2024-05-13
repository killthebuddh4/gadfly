import express from "express";
import { next } from "./next.js";
import { edges } from "./edges.js";
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

const zGenerateEdgesParams = z.object({
  id: z.string().uuid(),
});

router.post("/:id/edges", async (req, res) => {
  const params = zGenerateEdgesParams.parse({ ...req.params, ...req.body });
  const data = await edges({ id: params.id });

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

import express from "express";
import { z } from "zod";
import { create } from "./create.js";
import { read } from "./read.js";
import { code } from "./code.js";
import { description } from "./description.js";

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
  code: z.number().int().positive(),
  description: z.string(),
});

router.post("/", async (req, res) => {
  const body = zCreateBody.parse(req.body);
  const data = await create({ code: body.code, description: body.description });

  res.json({ ok: true, data });
});

router.get("/:id/description", async (req, res) => {
  const params = zGetParams.parse(req.params);
  const data = await description({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/code", async (req, res) => {
  const params = zGetParams.parse(req.params);
  const data = await code({ id: params.id });

  res.json({ ok: true, data });
});

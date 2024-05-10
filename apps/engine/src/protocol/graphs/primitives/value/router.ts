import express from "express";
import { z } from "zod";
import { create } from "./create.js";
import { read } from "./read.js";

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
  value: z.string(),
});

router.post("/", async (req, res) => {
  const body = zCreateBody.parse(req.body);
  const data = await create({ type: body.type, value: body.value });

  res.json({ ok: true, data });
});

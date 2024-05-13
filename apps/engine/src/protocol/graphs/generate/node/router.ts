import express from "express";
import { next } from "./next.js";
import { operation } from "./operation.js";
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

const zGenerateOperationParams = z.object({
  id: z.string().uuid(),
});

router.post("/:id/operation", async (req, res) => {
  const params = zGenerateOperationParams.parse({ ...req.params, ...req.body });
  const data = await operation({ id: params.id });

  res.json({ ok: true, data });
});

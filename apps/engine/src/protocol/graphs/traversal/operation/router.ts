import express from "express";
import { downstream } from "./downstream.js";
import { upstream } from "./upstream.js";
import { z } from "zod";

export const router = express.Router();

router.use(express.json());

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

import express from "express";
import { downstream } from "./downstream.js";
import { upstream } from "./upstream.js";
import { heads } from "./heads.js";
import { tails } from "./tails.js";
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

const zHeadsParams = z.object({
  ids: z.array(z.string().uuid()),
});

router.get("/heads", async (req, res) => {
  const params = zHeadsParams.parse(req.query);
  const data = await heads({ ids: params.ids });

  res.json({ ok: true, data });
});

const zTailsParams = z.object({
  ids: z.array(z.string().uuid()),
});

router.get("/tails", async (req, res) => {
  const params = zTailsParams.parse(req.query);
  const data = await tails({ ids: params.ids });

  res.json({ ok: true, data });
});

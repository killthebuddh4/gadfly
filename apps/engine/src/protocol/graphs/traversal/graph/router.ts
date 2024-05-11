import express from "express";
import { heads } from "./heads.js";
import { tails } from "./tails.js";
import { z } from "zod";

export const router = express.Router();

router.use(express.json());

const zHeadsParams = z.object({
  id: z.string().uuid(),
});

router.get("/heads", async (req, res) => {
  const params = zHeadsParams.parse(req.query);
  const data = await heads({ id: params.id });

  res.json({ ok: true, data });
});

const zTailsParams = z.object({
  id: z.string().uuid(),
});

router.get("/tails", async (req, res) => {
  const params = zTailsParams.parse(req.query);
  const data = await tails({ id: params.id });

  res.json({ ok: true, data });
});

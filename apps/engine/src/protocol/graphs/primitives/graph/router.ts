import express from "express";
import { z } from "zod";
import { read } from "./read.js";
import { create } from "./create.js";
import { heads } from "./heads.js";
import { tails } from "./tails.js";
import { setValue } from "./setValue.js";

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
});

router.post("/", async (req, res) => {
  const body = zCreateBody.parse(req.body);

  const data = await create({ type: body.type });

  res.json({ ok: true, data });
});

const zSetValueParams = z.object({
  id: z.string().uuid(),
});

const zSetValueBody = z.object({
  value: z.string().uuid(),
});

router.post("/:id/value", async (req, res) => {
  const params = zSetValueParams.parse(req.params);
  const body = zSetValueBody.parse(req.body);

  const data = await setValue({ id: params.id, value: body.value });

  res.json({ ok: true, data });
});

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

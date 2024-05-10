import express from "express";
import { create } from "./create.js";
import { read } from "./read.js";
import { setTo } from "./setTo.js";
import { setValue } from "./setValue.js";
import { z } from "zod";

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
  graph: z.string().uuid(),
  from: z.string().uuid(),
  type: z.string().uuid(),
  operation: z.string().uuid(),
});

router.post("/", async (req, res) => {
  const body = zCreateBody.parse(req.body);

  const data = await create({
    graph: body.graph,
    from: body.from,
    type: body.type,
    operation: body.operation,
  });

  res.json({ ok: true, data });
});

const zSetToParams = z.object({
  id: z.string().uuid(),
});

const zSetToBody = z.object({
  to: z.string().uuid(),
});

router.post("/:id/to", async (req, res) => {
  const params = zSetToParams.parse(req.params);
  const body = zSetToBody.parse(req.body);

  const data = await setTo({
    id: params.id,
    to: body.to,
  });

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

  const data = await setValue({
    id: params.id,
    value: body.value,
  });

  res.json({ ok: true, data });
});

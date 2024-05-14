import express from "express";
import { z } from "zod";
import { create as createRoot } from "./root/create.js";
import { read as readRoot } from "./root/read.js";
import { generate as generateRoot } from "./root/generate.js";
import { interpret as interpretRoot } from "./root/interpret.js";
import { read as readEdges } from "./edges/read.js";
import { write as writeEdges } from "./edges/write.js";
import { interpret as interpretEdges } from "./edges/interpret.js";
import { generate as generateEdges } from "./edges/generate.js";
import { read as readType } from "./type/read.js";
import { generate } from "./type/generate.js";
import { interpret as interpretType } from "./type/interpret.js";
import { read as readValue } from "./value/read.js";
import { write as writeValue } from "./value/write.js";
import { interpret as interpretValue } from "./value/interpret.js";
import { generate as generateValue } from "./value/generate.js";

export const router = express.Router();

router.use(express.json());

const zCreateRootBody = z.object({
  type: z.string().uuid(),
});

router.post("/generate", async (req, res) => {
  const data = await generateRoot();

  res.json({ ok: true, data });
});

router.post("/", async (req, res) => {
  const body = zCreateRootBody.parse(req.body);
  const data = await createRoot({ type: body.type });

  res.json({ ok: true, data });
});

const zReadRootParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id", async (req, res) => {
  const params = zReadRootParams.parse(req.params);
  const data = await readRoot({ id: params.id });

  res.json({ ok: true, data });
});

const zInterpretRootParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/interpret", async (req, res) => {
  const params = zInterpretRootParams.parse(req.params);
  const data = await interpretRoot({ id: params.id });

  res.json({ ok: true, data });
});

import express from "express";
import { create as createRoot } from "./root/create.js";
import { read as readRoot } from "./root/read.js";
import { interpret as interpretRoot } from "./root/interpret.js";
import { read as readFrom } from "./from/read.js";
import { interpret as interpretFrom } from "./from/interpret.js";
import { read as readTo } from "./to/read.js";
import { interpret as interpretTo } from "./to/interpret.js";
import { read as readGraph } from "./graph/read.js";
import { interpret as interpretGraph } from "./graph/interpret.js";
import { read as readValue } from "./value/read.js";
import { interpret as interpretValue } from "./value/interpret.js";
import {
  zCreateRootBody,
  zCreateRootData,
  zReadRootParams,
  zReadRootData,
  zInterpretRootParams,
  zReadFromParams,
  zInterpretFromParams,
  zReadToParams,
  zInterpretToParams,
  zReadGraphParams,
  zInterpretGraphParams,
  zReadValueParams,
  zInterpretValueParams,
} from "./schemas.js";

export const router = express.Router();

router.use(express.json());

router.post("/", async (req, res) => {
  const body = zCreateRootBody.parse(req.body);
  const data = await createRoot({
    graph: body.graph,
    from: body.from,
    to: body.to,
    value: body.value,
  });

  res.json({ ok: true, data: zCreateRootData.parse(data) });
});

router.get("/:id", async (req, res) => {
  const params = zReadRootParams.parse(req.params);
  const data = await readRoot({ id: params.id });

  res.json({ ok: true, data: zReadRootData.parse(data) });
});

router.get("/:id/interpret", async (req, res) => {
  const params = zInterpretRootParams.parse(req.params);
  const data = await interpretRoot({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/from", async (req, res) => {
  const params = zReadFromParams.parse(req.params);
  const data = await readFrom({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/from/interpret", async (req, res) => {
  const params = zInterpretFromParams.parse(req.params);
  const data = await interpretFrom({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/to", async (req, res) => {
  const params = zReadToParams.parse(req.params);
  const data = await readTo({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/to/interpret", async (req, res) => {
  const params = zInterpretToParams.parse(req.params);
  const data = await interpretTo({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/graph", async (req, res) => {
  const params = zReadGraphParams.parse(req.params);
  const data = await readGraph({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/graph/interpret", async (req, res) => {
  const params = zInterpretGraphParams.parse(req.params);
  const data = await interpretGraph({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/value", async (req, res) => {
  const params = zReadValueParams.parse(req.params);
  const data = await readValue({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/value/interpret", async (req, res) => {
  const params = zInterpretValueParams.parse(req.params);
  const data = await interpretValue({ id: params.id });

  res.json({ ok: true, data });
});

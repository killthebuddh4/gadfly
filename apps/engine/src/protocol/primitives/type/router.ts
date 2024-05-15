import express from "express";
import { z } from "zod";
import { create as createRoot } from "./root/create.js";
import { read as readRoot } from "./root/read.js";
import { interpret as interpretRoot } from "./root/interpret.js";
import { read as readCode } from "./url/read.js";
import { interpret as interpretCode } from "./url/interpret.js";
import { read as readDescription } from "./description/read.js";
import { interpret as interpretDescription } from "./description/interpret.js";
import {
  zCreateRootBody,
  zCreateRootData,
  zReadRootParams,
  zReadRootData,
  zInterpretRootParams,
  zReadCodeParams,
  zInterpretCodeParams,
  zReadDescriptionParams,
  zInterpretDescriptionParams,
} from "./schemas.js";

export const router = express.Router();

router.use(express.json());

router.post("/", async (req, res) => {
  let body;
  try {
    body = zCreateRootBody.parse(req.body);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid body" });
    return;
  }

  let data;
  try {
    data = await createRoot({
      url: body.url,
      description: body.description,
    });
  } catch (error) {
    res.status(500).json({ ok: false, error: "TODO(better error message)" });
    return;
  }

  res.json({ ok: true, data });
});

router.get("/:id", async (req, res) => {
  const params = zReadRootParams.parse(req.params);
  const data = await readRoot({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/interpret", async (req, res) => {
  const params = zInterpretRootParams.parse(req.params);
  const data = await interpretRoot({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/code", async (req, res) => {
  const params = zReadCodeParams.parse(req.params);
  const data = await readCode({ id: params.id });

  res.json({ ok: true, data });
});
router.get("/:id/code/interpret", async (req, res) => {
  const params = zInterpretCodeParams.parse(req.params);
  const data = await interpretCode({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/description", async (req, res) => {
  const params = zReadDescriptionParams.parse(req.params);
  const data = await readDescription({ id: params.id });

  res.json({ ok: true, data });
});

router.get("/:id/description/interpret", async (req, res) => {
  const params = zInterpretDescriptionParams.parse(req.params);
  const data = await interpretDescription({ id: params.id });

  res.json({ ok: true, data });
});

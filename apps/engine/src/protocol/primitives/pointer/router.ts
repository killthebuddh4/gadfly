import express from "express";
import { read as readRoot } from "./root/read.js";
import { create as createRoot } from "./root/create.js";
import { read as readFrom } from "./from/read.js";
import { read as readTo } from "./to/read.js";

import {
  zPointer,
  zReadRootParams,
  zReadRootData,
  zCreateRootBody,
  zCreateRootData,
  zReadFromParams,
  zReadFromData,
  zReadToParams,
  zReadToData,
} from "./schemas.js";

export const router = express.Router();

router.use(express.json());

router.get("/:id", async (req, res) => {
  const params = zReadRootParams.parse(req.params);
  const data = await readRoot({ id: params.id });

  res.json({ ok: true, data: zReadRootData.parse(data) });
});

router.post("/", async (req, res) => {
  const body = zCreateRootBody.parse(req.body);
  const data = await createRoot({
    value: body.value,
    from: body.from,
    to: body.to,
  });

  res.json({ ok: true, data: zCreateRootData.parse(data) });
});

router.get("/:id/from", async (req, res) => {
  const params = zReadFromParams.parse(req.params);
  const data = await readFrom({ id: params.id });

  res.json({ ok: true, data: zReadFromData.parse(data) });
});

router.get("/:id/to", async (req, res) => {
  const params = zReadToParams.parse(req.params);
  const data = await readTo({ id: params.id });

  res.json({ ok: true, data: zReadToData.parse(data) });
});

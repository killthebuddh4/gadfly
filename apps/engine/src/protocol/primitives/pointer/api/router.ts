import express from "express";
import { read as readRoot } from "../read.js";
import { create as createRoot } from "../create.js";
import { read as readFrom } from "../from/read.js";
import { read as readTo } from "../to/read.js";
import { read as readParents } from "../parents/read.js";
import { read as readChildren } from "../children/read.js";

import {
  zReadChildrenData,
  zReadChildrenParams,
  zReadParentsData,
  zReadParentsParams,
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
    type_id: body.type_id,
    value_id: body.value_id,
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

router.get("/:id/parents", async (req, res) => {
  const params = zReadParentsParams.parse(req.params);
  const data = await readParents({ id: params.id });

  res.json({ ok: true, data: zReadParentsData.parse(data) });
});

router.get("/:id/children", async (req, res) => {
  const params = zReadChildrenParams.parse(req.params);
  const data = await readChildren({ id: params.id });

  res.json({ ok: true, data: zReadChildrenData.parse(data) });
});

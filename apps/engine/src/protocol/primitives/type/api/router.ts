import express from "express";
import { search } from "../search.js";
import { create as createRoot } from "../create.js";
import { read as readRoot } from "../read.js";
import { interpret as interpretRoot } from "../interpret.js";
import { read as readCode } from "../url/read.js";
import { interpret as interpretCode } from "../url/interpret.js";
import { read as readDescription } from "../description/read.js";
import { interpret as interpretDescription } from "../description/interpret.js";
import { read as readChildren } from "../children/read.js";
import { read as readParents } from "../parents/read.js";
import {
  zReadChildrenData,
  zReadChildrenParams,
  zReadParentsData,
  zSearchData,
  zCreateRootBody,
  zCreateRootData,
  zReadRootParams,
  zReadRootData,
  zInterpretRootParams,
  zReadCodeParams,
  zInterpretCodeParams,
  zReadDescriptionParams,
  zInterpretDescriptionParams,
  zReadParentsParams,
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

  res.json({ ok: true, data: zCreateRootData.parse(data) });
});

router.get("/:id", async (req, res) => {
  console.log("HERRRRRRRRRRRRRRRREEEEEEEEEEEEEEEEEE");

  const params = zReadRootParams.parse(req.params);
  const data = await readRoot({ id: params.id });

  console.log(data);

  res.json({ ok: true, data: zReadRootData.parse(data) });
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

router.get("/", async (req, res) => {
  const data = await search();

  res.json({ ok: true, data: zSearchData.parse(data) });
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

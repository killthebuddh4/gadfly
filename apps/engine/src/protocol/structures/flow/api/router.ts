import express from "express";
import { create as createRoot } from "../create.js";
import { read as readRoot } from "../read.js";
import { create as createChannel } from "../channel/create.js";
import { read as readChannel } from "../channel/read.js";
import { read as readChannels } from "../channels/read.js";
import { create as createState } from "../state/create.js";
import { read as readState } from "../state/read.js";
import { read as readStates } from "../states/read.js";
import { read as readHeads } from "../heads/read.js";
import { read as readTails } from "../tails/read.js";
import {
  zCreateRootBody,
  zCreateRootData,
  zReadRootParams,
  zReadRootData,
  zCreateChannelParams,
  zCreateChannelBody,
  zReadChannelParams,
  zReadChannelData,
  zReadChannelsParams,
  zCreateStateBody,
  zCreateStateParams,
  zReadStateParams,
  zReadChannelsData,
  zReadHeadsData,
  zReadHeadsParams,
  zReadStateData,
  zReadStatesData,
  zReadStatesParams,
  zReadTailsData,
  zReadTailsParams,
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
    data = await createRoot(body);
  } catch (error) {
    res.status(500).json({ ok: false, error: `createRoot failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zCreateRootData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zCreateRootData.parse failed" });
  }
});

router.get("/:id", async (req, res) => {
  let params;
  try {
    params = zReadRootParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readRoot({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readRoot failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadRootData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadRootData.parse failed" });
  }
});

router.post("/channel", async (req, res) => {
  let params;
  try {
    params = zCreateChannelParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let body;
  try {
    body = zCreateChannelBody.parse(req.body);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid body" });
    return;
  }

  let data;
  try {
    data = await createChannel(body);
  } catch (error) {
    res.status(500).json({ ok: false, error: `createChannel failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadChannelData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadChannelData.parse failed" });
  }
});

router.get("/:id/channels", async (req, res) => {
  let params;
  try {
    params = zReadChannelsParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readChannels({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readChannels failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadChannelsData.parse(data) });
  } catch {
    res
      .status(500)
      .json({ ok: false, error: "zReadChannelsData.parse failed" });
  }
});

router.get("/channel/:id", async (req, res) => {
  let params;
  try {
    params = zReadChannelParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readChannel({
      id: params.id,
    });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readChannel failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadChannelData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadChannelData.parse failed" });
  }
});

router.post("/state", async (req, res) => {
  let params;
  try {
    params = zCreateStateParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let body;
  try {
    body = zCreateStateBody.parse(req.body);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid body" });
    return;
  }

  let data;
  try {
    data = await createState(body);
  } catch (error) {
    res.status(500).json({ ok: false, error: `createState failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadStateData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadStateData.parse failed" });
  }
});

router.get("/state/:id", async (req, res) => {
  let params;
  try {
    params = zReadStateParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readState({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readState failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadStateData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadStateData.parse failed" });
  }
});

router.get("/:id/states", async (req, res) => {
  let params;
  try {
    params = zReadStatesParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readStates({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readStates failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadStatesData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadStatesData.parse failed" });
  }
});

router.get("/:id/heads", async (req, res) => {
  let params;
  try {
    params = zReadHeadsParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readHeads({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readHeads failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadHeadsData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadHeadsData.parse failed" });
  }
});

router.get("/:id/tails", async (req, res) => {
  let params;
  try {
    params = zReadTailsParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readTails({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readTails failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadTailsData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadTailsData.parse failed" });
  }
});

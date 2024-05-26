import * as express from "express";
import { create as createProcess } from "../create.js";
import { read as readProcess } from "../read.js";
import { create as createSignal } from "../signal/create.js";
import { read as readSignal } from "../signal/read.js";
import { read as readSignals } from "../signals/read.js";
import { create as createPhase } from "../phase/create.js";
import { read as readPhase } from "../phase/read.js";
import { read as readPhases } from "../phases/read.js";
import { read as readTerminal } from "../terminal/read.js";
import { read as readInitial } from "../initial/read.js";
import {
  zCreateProcessBody,
  zCreateProcessData,
  zCreateSignalParams,
  zCreateSignalBody,
  zReadSignalParams,
  zReadSignalData,
  zReadSignalsParams,
  zCreatePhaseBody,
  zCreatePhaseParams,
  zReadPhaseParams,
  zReadSignalsData,
  zReadTerminalData,
  zReadTerminalParams,
  zReadPhaseData,
  zReadPhasesData,
  zReadPhasesParams,
  zReadInitialData,
  zReadInitialParams,
  zReadProcessData,
} from "./schemas.js";

export const router = express.Router();

router.use(express.json());

router.post("/", async (req, res) => {
  let body;
  try {
    body = zCreateProcessBody.parse(req.body);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid body" });
    return;
  }

  let data;
  try {
    data = await createProcess(body);
  } catch (error) {
    res.status(500).json({ ok: false, error: `createInitial failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zCreateProcessData.parse(data) });
  } catch {
    res
      .status(500)
      .json({ ok: false, error: "zCreateProcessData.parse failed" });
  }
});

router.get("/:id", async (req, res) => {
  let params;
  try {
    params = zReadProcessData.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readProcess({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readProcess failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadProcessData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadProcessData.parse failed" });
  }
});

router.post("/signal", async (req, res) => {
  let params;
  try {
    params = zCreateSignalParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let body;
  try {
    body = zCreateSignalBody.parse(req.body);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid body" });
    return;
  }

  let data;
  try {
    data = await createSignal(body);
  } catch (error) {
    res.status(500).json({ ok: false, error: `createSignal failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadSignalData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadSignalData.parse failed" });
  }
});

router.get("/:id/signals", async (req, res) => {
  let params;
  try {
    params = zReadSignalsParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readSignals({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readSignals failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadSignalsData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadSignalsData.parse failed" });
  }
});

router.get("/signal/:id", async (req, res) => {
  let params;
  try {
    params = zReadSignalParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readSignal({
      id: params.id,
    });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readSignal failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadSignalData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadSignalData.parse failed" });
  }
});

router.post("/phase", async (req, res) => {
  let params;
  try {
    params = zCreatePhaseParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let body;
  try {
    body = zCreatePhaseBody.parse(req.body);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid body" });
    return;
  }

  let data;
  try {
    data = await createPhase(body);
  } catch (error) {
    res.status(500).json({ ok: false, error: `createPhase failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadPhaseData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadPhaseData.parse failed" });
  }
});

router.get("/phase/:id", async (req, res) => {
  let params;
  try {
    params = zReadPhaseParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readPhase({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readPhase failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadPhaseData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadPhaseData.parse failed" });
  }
});

router.get("/:id/Phases", async (req, res) => {
  let params;
  try {
    params = zReadPhasesParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readPhases({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readPhases failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadPhasesData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadPhasesData.parse failed" });
  }
});

router.get("/:id/terminal", async (req, res) => {
  let params;
  try {
    params = zReadTerminalParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readTerminal({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readTerminal failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadTerminalData.parse(data) });
  } catch {
    res
      .status(500)
      .json({ ok: false, error: "zReadTerminalData.parse failed" });
  }
});

router.get("/:id/initial", async (req, res) => {
  let params;
  try {
    params = zReadInitialParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readInitial({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readInitial failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadInitialData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadInitialData.parse failed" });
  }
});

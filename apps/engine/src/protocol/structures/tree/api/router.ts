import express from "express";
import { create as createTree } from "../create.js";
import { read as readTree } from "../read.js";
import { create as createPath } from "../path/create.js";
import { read as readPath } from "../path/read.js";
import { read as readPaths } from "../paths/read.js";
import { create as createBranch } from "../branch/create.js";
import { read as readBranch } from "../branch/read.js";
import { read as readBranches } from "../branches/read.js";
import { read as readLeaves } from "../leaves/read.js";
import { read as readRoot } from "../root/read.js";
import {
  zCreateTreeBody,
  zCreateTreeData,
  zCreatePathParams,
  zCreatePathBody,
  zReadPathParams,
  zReadPathData,
  zReadPathsParams,
  zCreateBranchBody,
  zCreateBranchParams,
  zReadBranchParams,
  zReadPathsData,
  zReadLeavesData,
  zReadLeavesParams,
  zReadBranchData,
  zReadBranchesData,
  zReadBranchesParams,
  zReadRootData,
  zReadRootParams,
  zReadTreeData,
} from "./schemas.js";

export const router = express.Router();

router.use(express.json());

router.post("/", async (req, res) => {
  let body;
  try {
    body = zCreateTreeBody.parse(req.body);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid body" });
    return;
  }

  let data;
  try {
    data = await createTree(body);
  } catch (error) {
    res.status(500).json({ ok: false, error: `createRoot failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zCreateTreeData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zCreateTreeData.parse failed" });
  }
});

router.get("/:id", async (req, res) => {
  let params;
  try {
    params = zReadTreeData.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readTree({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readTree failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadTreeData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadTreeData.parse failed" });
  }
});

router.post("/path", async (req, res) => {
  let params;
  try {
    params = zCreatePathParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let body;
  try {
    body = zCreatePathBody.parse(req.body);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid body" });
    return;
  }

  let data;
  try {
    data = await createPath(body);
  } catch (error) {
    res.status(500).json({ ok: false, error: `createPath failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadPathData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadPathData.parse failed" });
  }
});

router.get("/:id/paths", async (req, res) => {
  let params;
  try {
    params = zReadPathsParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readPaths({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readPaths failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadPathsData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadPathsData.parse failed" });
  }
});

router.get("/path/:id", async (req, res) => {
  let params;
  try {
    params = zReadPathParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readPath({
      id: params.id,
    });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readPath failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadPathData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadPathData.parse failed" });
  }
});

router.post("/branch", async (req, res) => {
  let params;
  try {
    params = zCreateBranchParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let body;
  try {
    body = zCreateBranchBody.parse(req.body);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid body" });
    return;
  }

  let data;
  try {
    data = await createBranch(body);
  } catch (error) {
    res.status(500).json({ ok: false, error: `createBranch failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadBranchData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadBranchData.parse failed" });
  }
});

router.get("/branch/:id", async (req, res) => {
  let params;
  try {
    params = zReadBranchParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readBranch({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readBranch failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadBranchData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadBranchData.parse failed" });
  }
});

router.get("/:id/Branches", async (req, res) => {
  let params;
  try {
    params = zReadBranchesParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readBranches({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readBranches failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadBranchesData.parse(data) });
  } catch {
    res
      .status(500)
      .json({ ok: false, error: "zReadBranchesData.parse failed" });
  }
});

router.get("/:id/leaves", async (req, res) => {
  let params;
  try {
    params = zReadLeavesParams.parse(req.params);
  } catch {
    res.status(400).json({ ok: false, error: "Invalid params" });
    return;
  }

  let data;
  try {
    data = await readLeaves({ id: params.id });
  } catch (error) {
    res.status(500).json({ ok: false, error: `readLeaves failed` });
    return;
  }

  try {
    res.json({ ok: true, data: zReadLeavesData.parse(data) });
  } catch {
    res.status(500).json({ ok: false, error: "zReadLeavesData.parse failed" });
  }
});

router.get("/:id/root", async (req, res) => {
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

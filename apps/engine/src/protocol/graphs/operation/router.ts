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

const zReadEdgesParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/edges", async (req, res) => {
  const params = zReadEdgesParams.parse(req.params);
  const data = await readEdges({ id: params.id });

  res.json({ ok: true, data });
});

const zWriteEdgesParams = z.object({
  id: z.string().uuid(),
});

const zWriteEdgesBody = z.object({
  edges: z.array(z.string().uuid()),
});

router.post("/:id/edges", async (req, res) => {
  const params = zWriteEdgesParams.parse(req.params);
  const body = zWriteEdgesBody.parse(req.body);
  const data = await writeEdges({ id: params.id, edges: body.edges });

  res.json({ ok: true, data });
});

const zGenerateEdgesParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/edges/generate", async (req, res) => {
  const params = zGenerateEdgesParams.parse(req.params);
  const data = await generateEdges({ id: params.id });

  res.json({ ok: true, data });
});

const zInterpretEdgesParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/edges/interpret", async (req, res) => {
  const params = zInterpretEdgesParams.parse(req.params);
  const data = await interpretEdges({ id: params.id });

  res.json({ ok: true, data });
});

const zReadTypeParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/type", async (req, res) => {
  const params = zReadTypeParams.parse(req.params);
  const data = await readType({ id: params.id });

  res.json({ ok: true, data });
});

const zGenerateTypeParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/type/generate", async (req, res) => {
  const params = zGenerateTypeParams.parse(req.params);
  const data = await generate({ id: params.id });

  res.json({ ok: true, data });
});

const zInterpretTypeParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/type/interpret", async (req, res) => {
  const params = zInterpretTypeParams.parse(req.params);
  const data = await interpretType({ id: params.id });

  res.json({ ok: true, data });
});

const zReadValueParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/value", async (req, res) => {
  const params = zReadValueParams.parse(req.params);
  const data = await readValue({ id: params.id });

  res.json({ ok: true, data });
});

const zWriteValueParams = z.object({
  id: z.string().uuid(),
});

const zWriteValueBody = z.object({
  value: z.string().uuid(),
});

router.post("/:id/value", async (req, res) => {
  const params = zWriteValueParams.parse(req.params);
  const body = zWriteValueBody.parse(req.body);
  const data = await writeValue({ id: params.id, value: body.value });

  res.json({ ok: true, data });
});

const zInterpretValueParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/value/interpret", async (req, res) => {
  const params = zInterpretValueParams.parse(req.params);
  const data = await interpretValue({ id: params.id });

  res.json({ ok: true, data });
});

const zGenerateValueParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/value/generate", async (req, res) => {
  const params = zGenerateValueParams.parse(req.params);
  const data = await generateValue({ id: params.id });

  res.json({ ok: true, data });
});

import express from "express";
import { z } from "zod";
import { create as createRoot } from "./root/create.js";
import { read as readRoot } from "./root/read.js";
import { generate as generateRoot } from "./root/generate.js";
import { interpret as interpretRoot } from "./root/interpret.js";
import { read as readFrom } from "./from/read.js";
import { generate as generateFrom } from "./from/generate.js";
import { interpret as interpretFrom } from "./from/interpret.js";
import { read as readTo } from "./to/read.js";
import { generate as generateTo } from "./to/generate.js";
import { interpret as interpretTo } from "./to/interpret.js";
import { write as writeTo } from "./to/write.js";
import { read as readGraph } from "./graph/read.js";
import { interpret as interpretGraph } from "./graph/interpret.js";
import { generate as generateGraph } from "./graph/generate.js";
import { read as readOperation } from "./operation/read.js";
import { interpret as interpretOperation } from "./operation/interpret.js";
import { generate as generateOperation } from "./operation/generate.js";
import { read as readType } from "./type/read.js";
import { interpret as interpretType } from "./type/interpret.js";
import { generate as generateType } from "./type/generate.js";
import { read as readValue } from "./value/read.js";
import { write as writeValue } from "./value/write.js";
import { interpret as interpretValue } from "./value/interpret.js";
import { generate as generateValue } from "./value/generate.js";

export const router = express.Router();

router.use(express.json());

router.post("/generate", async (req, res) => {
  const data = await generateRoot();

  res.json({ ok: true, data });
});

const zCreateRootBody = z.object({
  graph: z.string().uuid(),
  from: z.string().uuid(),
  type: z.string().uuid(),
  operation: z.string().uuid(),
});

router.post("/", async (req, res) => {
  const body = zCreateRootBody.parse(req.body);
  const data = await createRoot({
    graph: body.graph,
    from: body.from,
    type: body.type,
    operation: body.operation,
  });

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

const zReadFromParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/from", async (req, res) => {
  const params = zReadFromParams.parse(req.params);
  const data = await readFrom({ id: params.id });

  res.json({ ok: true, data });
});

const zGenerateFromParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/from/generate", async (req, res) => {
  const params = zGenerateFromParams.parse(req.params);
  const data = await generateFrom({ id: params.id });

  res.json({ ok: true, data });
});

const zInterpretFromParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/from/interpret", async (req, res) => {
  const params = zInterpretFromParams.parse(req.params);
  const data = await interpretFrom({ id: params.id });

  res.json({ ok: true, data });
});

const zReadToParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/to", async (req, res) => {
  const params = zReadToParams.parse(req.params);
  const data = await readTo({ id: params.id });

  res.json({ ok: true, data });
});

const zGenerateToParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/to/generate", async (req, res) => {
  const params = zGenerateToParams.parse(req.params);
  const data = await generateTo({ id: params.id });

  res.json({ ok: true, data });
});

const zInterpretToParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/to/interpret", async (req, res) => {
  const params = zInterpretToParams.parse(req.params);
  const data = await interpretTo({ id: params.id });

  res.json({ ok: true, data });
});

const zWriteToParams = z.object({
  id: z.string().uuid(),
});

const zWriteToBody = z.object({
  to: z.string().uuid(),
});

router.post("/:id/to", async (req, res) => {
  const params = zWriteToParams.parse(req.params);
  const body = zWriteToBody.parse(req.body);
  const data = await writeTo({ id: params.id, to: body.to });

  res.json({ ok: true, data });
});

const zReadGraphParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/graph", async (req, res) => {
  const params = zReadGraphParams.parse(req.params);
  const data = await readGraph({ id: params.id });

  res.json({ ok: true, data });
});

const zInterpretGraphParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/graph/interpret", async (req, res) => {
  const params = zInterpretGraphParams.parse(req.params);
  const data = await interpretGraph({ id: params.id });

  res.json({ ok: true, data });
});

const zGenerateGraphParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/graph/generate", async (req, res) => {
  const params = zGenerateGraphParams.parse(req.params);
  const data = await generateGraph({ id: params.id });

  res.json({ ok: true, data });
});

const zReadOperationParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/operation", async (req, res) => {
  const params = zReadOperationParams.parse(req.params);
  const data = await readOperation({ id: params.id });

  res.json({ ok: true, data });
});

const zInterpretOperationParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/operation/interpret", async (req, res) => {
  const params = zInterpretOperationParams.parse(req.params);
  const data = await interpretOperation({ id: params.id });

  res.json({ ok: true, data });
});

const zGenerateOperationParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/operation/generate", async (req, res) => {
  const params = zGenerateOperationParams.parse(req.params);
  const data = await generateOperation({ id: params.id });

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
  const data = await generateType({ id: params.id });

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

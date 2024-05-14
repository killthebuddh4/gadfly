import express from "express";
import { z } from "zod";
import { create as createRoot } from "./root/create.js";
import { read as readRoot } from "./root/read.js";
import { generate as generateRoot } from "./root/generate.js";
import { interpret as interpretRoot } from "./root/interpret.js";
import { read as readGraph } from "./graph/read.js";
import { interpret as interpretGraph } from "./graph/interpret.js";
import { generate as generateGraph } from "./graph/generate.js";
import { read as readType } from "./type/read.js";
import { interpret as interpretType } from "./type/interpret.js";
import { generate as generateType } from "./type/generate.js";
import { read as readValue } from "./value/read.js";
import { write as writeValue } from "./value/write.js";
import { interpret as interpretValue } from "./value/interpret.js";
import { generate as generateValue } from "./value/generate.js";
import { read as readUpstream } from "./upstream/read.js";
import { write as writeUpstream } from "./upstream/write.js";
import { interpret as interpretUpstream } from "./upstream/interpret.js";
import { generate as generateUpstream } from "./upstream/generate.js";
import { read as readDownstream } from "./downstream/read.js";
import { write as writeDownstream } from "./downstream/write.js";
import { interpret as interpretDownstream } from "./downstream/interpret.js";
import { generate as generateDownstream } from "./downstream/generate.js";

export const router = express.Router();

router.use(express.json());

router.post("/generate", async (req, res) => {
  const data = await generateRoot();

  res.json({ ok: true, data });
});

const zCreateRootBody = z.object({
  graph: z.string().uuid(),
  type: z.string().uuid(),
});

router.post("/", async (req, res) => {
  const body = zCreateRootBody.parse(req.body);
  const data = await createRoot({
    graph: body.graph,
    type: body.type,
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

router.post("/:id/graph/generate", async (req, res) => {
  const params = zGenerateGraphParams.parse(req.params);
  const data = await generateGraph({ id: params.id });

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

const zInterpretTypeParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/type/interpret", async (req, res) => {
  const params = zInterpretTypeParams.parse(req.params);
  const data = await interpretType({ id: params.id });

  res.json({ ok: true, data });
});

const zGenerateTypeParams = z.object({
  id: z.string().uuid(),
});

router.post("/:id/type/generate", async (req, res) => {
  const params = zGenerateTypeParams.parse(req.params);
  const data = await generateType({ id: params.id });

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

router.post("/:id/value/generate", async (req, res) => {
  const params = zGenerateValueParams.parse(req.params);
  const data = await generateValue({ id: params.id });

  res.json({ ok: true, data });
});

const zReadUpstreamParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/upstream", async (req, res) => {
  const params = zReadUpstreamParams.parse(req.params);
  const data = await readUpstream({ id: params.id });

  res.json({ ok: true, data });
});

const zWriteUpstreamParams = z.object({
  id: z.string().uuid(),
});

const zWriteUpstreamBody = z.object({
  upstream: z.string().uuid(),
});

router.post("/:id/upstream", async (req, res) => {
  const params = zWriteUpstreamParams.parse(req.params);
  const body = zWriteUpstreamBody.parse(req.body);
  const data = await writeUpstream({ id: params.id, upstream: body.upstream });

  res.json({ ok: true, data });
});

const zInterpretUpstreamParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/upstream/interpret", async (req, res) => {
  const params = zInterpretUpstreamParams.parse(req.params);
  const data = await interpretUpstream({ id: params.id });

  res.json({ ok: true, data });
});

const zGenerateUpstreamParams = z.object({
  id: z.string().uuid(),
});

router.post("/:id/upstream/generate", async (req, res) => {
  const params = zGenerateUpstreamParams.parse(req.params);
  const data = await generateUpstream({ id: params.id });

  res.json({ ok: true, data });
});

const zReadDownstreamParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/downstream", async (req, res) => {
  const params = zReadDownstreamParams.parse(req.params);
  const data = await readDownstream({ id: params.id });

  res.json({ ok: true, data });
});

const zWriteDownstreamParams = z.object({
  id: z.string().uuid(),
});

const zWriteDownstreamBody = z.object({
  downstream: z.array(z.string().uuid()),
});

router.post("/:id/downstream", async (req, res) => {
  const params = zWriteDownstreamParams.parse(req.params);
  const body = zWriteDownstreamBody.parse(req.body);
  const data = await writeDownstream({
    id: params.id,
    downstream: body.downstream,
  });

  res.json({ ok: true, data });
});

const zInterpretDownstreamParams = z.object({
  id: z.string().uuid(),
});

router.get("/:id/downstream/interpret", async (req, res) => {
  const params = zInterpretDownstreamParams.parse(req.params);
  const data = await interpretDownstream({ id: params.id });

  res.json({ ok: true, data });
});

const zGenerateDownstreamParams = z.object({
  id: z.string().uuid(),
});

router.post("/:id/downstream/generate", async (req, res) => {
  const params = zGenerateDownstreamParams.parse(req.params);
  const data = await generateDownstream({ id: params.id });

  res.json({ ok: true, data });
});

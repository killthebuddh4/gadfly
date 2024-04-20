import express from "express";
import { getActor } from "../primitives/getActor.js";
import { z } from "zod";
import { createActor } from "../primitives/createActor.js";
import { prisma } from "../lib/prisma.js";

const app = express();

app.use(express.json());

const zCreate = z.object({
  name: z.string(),
  description: z.string(),
  inputs: z.array(z.string()),
  outputs: z.array(z.string()),
  constraints: z.array(z.string()),
});

app.get("/test", async (req, res) => {
  const data = await prisma.actor.findMany();
  res.json({ ok: true, data });
});

app.post("/actor", async (req, res) => {
  const options = zCreate.parse(req.body);
  const actor = await createActor(options);
  const description = await actor.describe();
  res.json({ ok: true, data: { actor: { description } } });
});

app.get("/actor/:id", async (req, res) => {
  const actor = await getActor({ id: req.params.id });
  const description = await actor.describe();
  res.json({ ok: true, data: { actor: { description } } });
});

const zExec = z
  .object({
    name: z.string(),
    description: z.string(),
    inputs: z.array(z.string()),
    outputs: z.array(z.string()),
    constraints: z.array(z.string()),
  })
  .partial();

app.post("/actor/:id/exec", async (req, res) => {
  const actor = await getActor({ id: req.params.id });
  const options = zExec.parse(req.body);
  await actor.exec(options);
  const description = await actor.describe();
  res.json({ ok: true, data: { actor: { description } } });
});

const zPatch = z.object({ feedback: z.string() });

app.post("/actor/:id/patch", async (req, res) => {
  const actor = await getActor({ id: req.params.id });
  const options = zPatch.parse(req.body);
  await actor.patch(options);
  const description = await actor.describe();
  res.json({ ok: true, data: { actor: { description } } });
});

const zCall = z.object({ inputs: z.array(z.string()) });

app.post("/actor/:id/call", async (req, res) => {
  const actor = await getActor({ id: req.params.id });
  const options = zCall.parse(req.body);
  const result = await actor.call({ inputs: options.inputs });
  res.json({ ok: true, data: { result } });
});

app.listen(9999, () => {
  console.log("Server is running on port 9999");
});

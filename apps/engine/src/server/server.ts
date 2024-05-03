import express from "express";
import { engine } from "../protocol/engine.js";
import { prisma } from "../lib/prisma.js";
import { z } from "zod";
import { createNetwork } from "../protocol/createNetwork.js";

engine();

const app = express();

app.use(express.json());

// const zCreate = z.object({
//   name: z.string(),
//   description: z.string(),
//   inputs: z.array(z.string()),
//   outputs: z.array(z.string()),
//   constraints: z.array(z.string()),
// });

// app.get("/test", async (req, res) => {
//   const data = await prisma.actor.findMany();
//   res.json({ ok: true, data });
// });

const zPostValue = z.object({
  value: z.string(),
});

app.post("/value", async (req, res) => {
  const options = zPostValue.parse(req.body);

  const created = await prisma.value.create({
    data: {
      value: options.value,
    },
  });

  res.json({ ok: true, data: created });
});

const zCreateNetwork = z.object({ description: z.string() });

app.post("/network", async (req, res) => {
  const body = zCreateNetwork.parse(req.body);

  const data = await createNetwork({ description: body.description });

  res.json({ ok: true, data });
});

app.listen(9999, () => {
  console.log("Server is running on port 9999");
});

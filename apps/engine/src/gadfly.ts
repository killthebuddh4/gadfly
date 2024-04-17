import express from "express";
import { createCluster } from "./networks/sestina/createCluster.js";
import { z } from "zod";

const cluster = await createCluster();

const app = express();

app.use(express.json());

app.get("/sestina", async (req, res) => {
  console.log("req.query.input", req.query.input);
  const input = z.string().parse(req.query.input);
  const output = await cluster({ input });
  res.json({ ok: true, data: { output: output } });
});

app.listen(9999, () => {
  console.log("Server is running on port 9999");
});

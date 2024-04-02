import { z } from "zod";
import { readFile } from "fs/promises";
import express from "express";
import * as GenerateAnalysisNode from "./protocol/actions/generate-analysis-node/action.js";
import { v4 as uuidv4 } from "uuid";

const app = express();

app.use(express.json());

app.get("/gadfly", async (req, res) => {
  const zRequest = z.object({
    problem: z.string(),
  });

  const request = zRequest.parse(req.query);

  const result = await GenerateAnalysisNode.action({
    parent: {
      id: uuidv4(),
      problem: request.problem,
      type: "Synthetic",
    },
  });

  res.json({ ok: true, data: result });
});

app.listen(9999, () => {
  console.log("Server is running on port 9999");
});

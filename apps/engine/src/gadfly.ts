import { z } from "zod";
import express from "express";
import * as GenerateAnalysisNode from "./protocol-v0/actions/generate-analysis-node/action.js";
import * as GenerateSyntheticNodes from "./protocol-v0/actions/generate-synthetic-nodes/action.js";
import { v4 as uuidv4 } from "uuid";
import { Synthetic } from "./protocol-v0/nodes/Synthetic.js";
import { Node } from "./protocol-v0/nodes/Node.js";
import { dialectic } from "./protocol-v1/dialectic/dialectic.js";

const app = express();

app.use(express.json());

app.get("/dialectic", async (req, res) => {
  const assertion = `
    Hello, I believe that the correct answer to the trolley problem is to divert
    the trolley.
  `
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  dialectic({ assertion });

  res.json({ ok: true, data: {} });
});

app.get("/gadfly", async (req, res) => {
  const zRequest = z.object({
    problem: z.string(),
  });

  const request = zRequest.parse(req.query);

  const synthetic: Synthetic = {
    id: uuidv4(),
    type: "Synthetic",
    parent: null,
    children: [],
    problem: request.problem,
  };

  console.log("GENERATING ANALYSIS NODE");

  const analysis = await GenerateAnalysisNode.action({
    parent: synthetic,
  });

  synthetic.children.push(analysis);

  console.log("GENERATING SYNTHETIC NODES");

  const synthetics = await GenerateSyntheticNodes.action({
    parent: analysis,
  });

  analysis.children = synthetics;

  const s = JSON.parse(
    JSON.stringify(synthetic, (key: string, value: Node | null) => {
      if (key !== "parent") {
        return value;
      } else {
        if (value === null) {
          return null;
        } else {
          return value.id;
        }
      }
    }),
  );

  res.json({ ok: true, data: s });
});

app.listen(9999, () => {
  console.log("Server is running on port 9999");
});
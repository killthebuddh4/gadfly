import { Analysis } from "./Analysis.js";
import { Analytic } from "./Analytic.js";
import { Context } from "./Context.js";
import { Parser } from "./Parser.js";
import { Synthetic } from "./Synthetic.js";
import { Binary } from "./Binary.js";
import { Input } from "./Input.js";
import { Output } from "./Output.js";
import { Generator } from "./Generator.js";

export type Node =
  | Synthetic
  | Analysis
  | Context
  | Analytic
  | Parser
  | Binary
  | Input
  | Output
  | Generator;

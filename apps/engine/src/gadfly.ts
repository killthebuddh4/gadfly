import { z } from "zod";
import { readFile } from "fs/promises";

const zRequest = z.object({
  request: z.string(),
});

const request = readFile("./request.json", "utf-8").then((data) => {
  return zRequest.parse(JSON.parse(data));
});

console.log(request);

type SyntheticNode = {
  root: AnalysisNode | null;
  analysis: AnalysisNode | null;
  description: string;
};

type AnalysisNode = SerialNode | ParallelNode | SwitchNode | FunctionNode;

type Justification = {
  text: string;
};

type SerialNode = {
  type: "serial";
  justification: Justification;
  branch: AnalysisNode;
};

type ParallelNode = {
  type: "parallel";
  justification: Justification;
  branches: Array<{}>;
};

type SwitchNode = {
  type: "switch";
  justification: Justification;
  branches: Array<{
    pattern: string;
    analysis: AnalysisNode;
  }>;
};

type FunctionNode = {
  type: "function";
  url: string;
};

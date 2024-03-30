import { z } from "zod";
import { readFile } from "fs/promises";
import { analyze } from "./protocol/actions/analyze/analyze.js";

const zRequest = z.object({
  birthday: z.string(),
  thanks: z.string(),
});

export const gadfly = async () => {
  const request = await readFile("./request.json", "utf-8").then((data) => {
    return zRequest.parse(JSON.parse(data));
  });

  const result = await analyze({
    synthetic: {
      problem: request.thanks,
      analysis: null,
      incoming: null,
    },
  });

  return result;
};

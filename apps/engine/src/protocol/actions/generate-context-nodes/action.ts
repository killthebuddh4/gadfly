import { Analysis } from "../../nodes/Analysis.js";
import { Context } from "../../nodes/Context.js";
import { generateForParallel } from "./generateForParallel.js";
import { generateForSerial } from "./generateForSerial.js";

export const action = async ({
  parent,
}: {
  parent: Analysis;
}): Promise<Context> => {
  switch (parent.classification.type) {
    case "SERIAL":
      return await generateForSerial({ parent });
    case "PARALLEL":
      return await generateForParallel({ parent });
    default:
      throw new Error(
        "Unknown classification type " + parent.classification.type,
      );
  }
};

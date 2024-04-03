import { Analysis } from "../../nodes/Analysis.js";
import { Context } from "../../nodes/Context.js";
import { v4 as uuidv4 } from "uuid";

export const generateForSerial = async ({
  parent,
}: {
  parent: Analysis;
}): Promise<Context> => {
  return {
    id: uuidv4(),
    type: "Context",
    parent,
    children: null,
  };
};

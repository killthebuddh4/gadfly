import { Analysis } from "../../nodes/Analysis.js";
import { Context } from "../../nodes/Context.js";
import { v4 as uuidv4 } from "uuid";

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

export const generateForParallel = async ({
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

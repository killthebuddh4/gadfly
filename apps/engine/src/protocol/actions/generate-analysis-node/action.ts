import { Analysis } from "../../nodes/Analysis.js";
import { Synthetic } from "../../nodes/Synthetic.js";
import { selectTechnique } from "./selectTechnique.js";
import { v4 as uuidv4 } from "uuid";
import { emit } from "../../emit.js";

export const action = async ({
  parent,
}: {
  parent: Synthetic;
}): Promise<Analysis> => {
  try {
    emit({
      node: parent,
      event: {
        type: "NodeGenerationStarted",
        id: uuidv4(),
        parent,
      },
    });

    const technique = await selectTechnique({ synthetic: parent });

    const analysis: Analysis = {
      id: uuidv4(),
      type: "Analysis",
      parent,
      children: [],
      classification: {
        type: technique,
      },
    };

    emit({
      node: parent,
      event: {
        type: "NodeGenerationFinished",
        id: uuidv4(),
        node: analysis,
      },
    });

    return analysis;
  } catch (error) {
    emit({
      node: parent,
      event: {
        type: "NodeGenerationFailed",
        id: uuidv4(),
        parent,
      },
    });

    throw error;
  }
};

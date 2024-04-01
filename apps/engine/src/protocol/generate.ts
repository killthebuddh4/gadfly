import { SyntheticNode } from "./SyntheticNode.js";
import { ProgramNode } from "./ProgramNode.js";
import { Supervisor } from "./Supervisor.js";
import { generateAnalysisNode } from "./generateAnalysisNode.js";
import { generateSyntheticNode } from "./generateSyntheticNode.js";
import { generateContextNode } from "./generateContextNode.js";

export const generate = async ({
  root,
  supervisor,
}: {
  root: SyntheticNode;
  supervisor: Supervisor;
}) => {
  let nextRoot: ProgramNode = { type: "synthetic", value: root };

  while (true) {
    const shouldGenerate = await supervisor.getPermissionToGenerate();

    if (!shouldGenerate) {
      break;
    }

    switch (nextRoot.type) {
      case "synthetic":
        const analysisNode = await generateAnalysisNode({
          syntheticNode: nextRoot.value,
        });

        nextRoot = { type: "analysis", value: analysisNode };

        break;
      case "analysis":
        const contextNode = await generateContextNode({
          analysisNode: nextRoot.value,
        });

        nextRoot = { type: "context", value: contextNode };

        break;
      case "context":
        const syntheticNode = await generateSyntheticNode({
          contextNode: nextRoot.value,
        });

        nextRoot = { type: "synthetic", value: syntheticNode };
      default:
        throw new Error("Invalid node type: " + nextRoot.type);
    }
  }
};

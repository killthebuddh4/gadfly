import { SyntheticNode } from "../../SyntheticNode.js";
import { selectTechnique } from "./selectTechnique.js";

export const analyze = ({ synthetic }: { synthetic: SyntheticNode }) => {
  if (synthetic.analysis !== null) {
    throw new Error("Already analyzed");
  }

  return selectTechnique({ synthetic });
};

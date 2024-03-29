import { SyntheticNode } from "../SyntheticNode.js";

export const analyze = ({ synthetic }: { synthetic: SyntheticNode }) => {
  if (synthetic.analysis !== null) {
    throw new Error("Already analyzed");
  }

  return null;
};

import { Synthetic } from "./Synthetic.js";
import { Input } from "./Input.js";

export type Parser = {
  id: string;
  type: "Parser";
  parent: Synthetic;
  children: Input | null;
};

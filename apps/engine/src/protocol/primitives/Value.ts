import { Synthesis } from "./Synthesis.js";
import { Type } from "./Type.js";

export type Value = {
  id: () => Promise<string>;
  type: () => Promise<Type>;
  value: () => Promise<string>;
  synthesis: () => Promise<Synthesis>;
};

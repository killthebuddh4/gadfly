import { Binary } from "./Binary.js";
import { Generator } from "./Generator.js";

export type Output = {
  id: string;
  type: "Output";
  parent: Binary;
  children: Generator | null;
};

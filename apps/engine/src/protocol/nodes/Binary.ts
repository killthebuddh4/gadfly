import { Input } from "./Input.js";
import { Output } from "./Output.js";

export type Binary = {
  id: string;
  type: "Binary";
  parent: Input;
  children: Output | null;
};

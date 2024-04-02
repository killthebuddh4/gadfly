import { Parser } from "./Parser.js";
import { Binary } from "./Binary.js";

export type Input = {
  id: string;
  type: "Input";
  parent: Parser;
  children: Binary | null;
};

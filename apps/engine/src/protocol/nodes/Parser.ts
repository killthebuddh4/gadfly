import { Context } from "./Context.js";
import { Input } from "./Input.js";

export type Parser = {
  id: string;
  type: "Parser";
  parent: Context;
  children: Input | null;
};

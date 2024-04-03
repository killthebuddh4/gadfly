import { Output } from "./Output.js";

export type Generator = {
  id: string;
  type: "Generator";
  parent: Output;
  children: null;
};

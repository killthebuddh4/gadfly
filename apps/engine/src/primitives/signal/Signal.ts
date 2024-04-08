import { Address } from "../address/Address.js";

export type Signal = {
  type: "exec" | "patch" | "kill" | "value" | "query" | "error";
  id: string;
  parent: Signal | null;
  trace: Address[];
  source: Address;
  destination: Address;
  text: string;
};

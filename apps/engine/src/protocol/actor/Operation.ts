import { Signal } from "../network/Signal.js";
import { Value } from "./Value.js";

export type Operation = {
  type: "write" | "widen" | "narrow";
  signal: Signal;
  value: Value;
};

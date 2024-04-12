import { Wire } from "./Wire.js";
import { Signal } from "../substrate/Signal.js";

export type Junction = (args: {
  signal: Signal;
  options: Wire[];
}) => Promise<Wire>;

import { Wire } from "./Wire.js";
import { Signal } from "../protocol-v0/actor/Signal.js";

export type Junction = (args: {
  signal: Signal;
  options: Wire[];
}) => Promise<Wire>;

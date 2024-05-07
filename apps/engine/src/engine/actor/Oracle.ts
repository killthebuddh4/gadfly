import { Signal } from "../protocol-v0/actor/Signal.js";

export type Oracle = (args: { signal: Signal }) => Promise<Signal>;

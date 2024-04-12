import { Signal } from "../substrate/Signal.js";

export type Oracle = (args: { signal: Signal }) => Promise<Signal>;

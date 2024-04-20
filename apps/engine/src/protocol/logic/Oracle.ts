import { Signal } from "../network/Signal.js";

export type Oracle = (args: { signal: Signal }) => Promise<Signal>;

import { Signal } from "../memory/Signal.js";

export type Oracle = (args: { signal: Signal }) => Promise<Signal>;

import { Signal } from "./Signal.js";

export type Oracle = (args: { signal: Signal }) => Promise<Signal>;
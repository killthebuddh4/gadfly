import { Signal } from "../actor/Signal.js";

export type Oracle = (args: { signal: Signal }) => Promise<Signal>;

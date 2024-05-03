import { Signal } from "../actor/Signal.js";

export type Handler = (args: { signal: Signal }) => Promise<Signal>;

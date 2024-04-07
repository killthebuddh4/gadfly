import { Signal } from "./Signal.js";

export type Handler = (args: { signal: Signal }) => Promise<void>;

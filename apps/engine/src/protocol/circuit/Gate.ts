import { Signal } from "./Signal.js";

export type Gate = (args: { signal: Signal }) => Promise<boolean>;

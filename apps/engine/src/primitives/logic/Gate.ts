import { Signal } from "../memory/Signal.js";

export type Gate = (args: { signal: Signal }) => Promise<boolean>;

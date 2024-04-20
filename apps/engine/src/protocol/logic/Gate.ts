import { Signal } from "../network/Signal.js";

export type Gate = (args: { signal: Signal }) => Promise<boolean>;

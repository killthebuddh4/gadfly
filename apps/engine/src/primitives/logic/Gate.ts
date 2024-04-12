import { Signal } from "../substrate/Signal.js";

export type Gate = (args: { signal: Signal }) => Promise<boolean>;

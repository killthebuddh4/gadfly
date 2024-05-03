import { Signal } from "../actor/Signal.js";

export type Gate = (args: { signal: Signal }) => Promise<boolean>;

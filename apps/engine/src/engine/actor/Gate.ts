import { Signal } from "../protocol-v0/actor/Signal.js";

export type Gate = (args: { signal: Signal }) => Promise<boolean>;

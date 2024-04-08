import { Signal } from "./Signal.js";

export type Filter = (args: { signal: Signal }) => Promise<boolean>;

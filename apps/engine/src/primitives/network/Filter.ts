import { Signal } from "./Signal.js";

export type Filter = (args: { message: Signal }) => Promise<boolean>;

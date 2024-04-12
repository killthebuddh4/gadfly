import { Signal } from "./Signal.js";

export type Handler = (args: { Signal: Signal }) => Promise<void>;

import { Signal } from "./Signal.js";

export type Filter = (args: { Signal: Signal }) => Promise<boolean>;

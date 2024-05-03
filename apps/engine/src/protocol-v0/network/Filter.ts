import { Signal } from "../actor/Signal.js";

export type Filter = (args: { message: Signal }) => Promise<boolean>;

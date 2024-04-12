import { Signal } from "./Signal.js";

export type Message = {
  id: string;
  parent: Message | null;
  signal: Signal;
};

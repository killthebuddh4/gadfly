import { Address } from "./Address.js";
import { Signal } from "./Signal.js";
import { Handler } from "./Handler.js";

export type Memory = {
  address: Address;
  history: Signal[];
  listeners: Array<{ id: string; handler: Handler }>;
  write: Handler;
  listen: (args: { handler: Handler }) => Promise<{
    ignore: () => Promise<void>;
  }>;
};

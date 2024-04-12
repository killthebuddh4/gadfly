import { Memory } from "../substrate/Neuron.js";
import { Filter } from "../substrate/Filter.js";
import { Handler } from "../substrate/Handler.js";

export type Proxy = {
  id: string;
  memory: Memory;
  filter: Filter;
  listen: (args: { handler: Handler }) => Promise<{
    ignore: () => Promise<void>;
  }>;
};

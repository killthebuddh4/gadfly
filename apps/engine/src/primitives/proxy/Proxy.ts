import { Memory } from "../memory/Memory.js";
import { Filter } from "../memory/Filter.js";
import { Handler } from "../memory/Handler.js";

export type Proxy = {
  id: string;
  memory: Memory;
  filter: Filter;
  listen: (args: { handler: Handler }) => Promise<{
    ignore: () => Promise<void>;
  }>;
};

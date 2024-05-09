import { Value } from "./Value.js";

export type Type = {
  id: () => Promise<string>;
  type: () => Promise<string>;
  values: () => Promise<Value[]>;
};

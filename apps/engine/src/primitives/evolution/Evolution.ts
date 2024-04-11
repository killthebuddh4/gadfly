import { Generation } from "./Generation.js";

export type Evolution = {
  history: Generation[];
  map: () => Promise<void>;
  filter: () => Promise<void>;
  reduce: () => Promise<void>;
};

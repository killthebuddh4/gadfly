import { Generation } from "./Generation.js";

export type Simulation = {
  history: Generation;
  map: () => Promise<void>;
  filter: () => Promise<void>;
  reduce: () => Promise<void>;
};

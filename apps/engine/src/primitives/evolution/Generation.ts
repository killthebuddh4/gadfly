import { Organism } from "./Organism.js";

export type Generation = {
  previous: Generation | null;
  population: Organism[];
};

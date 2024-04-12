import { Experiment } from "./Experiment.js";

export type Generation = {
  previous: Generation | null;
  population: Experiment[];
};

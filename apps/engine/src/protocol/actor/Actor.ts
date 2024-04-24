import { Variable } from "./Variable.js";

export type Actor = {
  parent: Variable | null;
  children: Variable[];

  inputs: {
    bound: Variable[];
    free: Variable[];
  };

  outputs: {
    bound: Variable[];
    free: Variable[];
  };
};

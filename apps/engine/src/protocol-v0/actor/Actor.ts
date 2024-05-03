import { Variable } from "./Variable.js";

export type Actor = {
  parent: () => Promise<Variable | null>;
  children: () => Promise<Variable[]>;

  inputs: {
    bound: () => Promise<Variable[]>;
    free: () => Promise<Variable[]>;
  };

  outputs: {
    bound: () => Promise<Variable[]>;
    free: () => Promise<Variable[]>;
  };
};

import { Signal } from "../network/Signal.js";

export type Expression = {
  id: string;
  type: "parallel" | "serial" | "switch" | "literal";
  parent: Expression | null;
  children: Expression[];
  expand: (args: {
    type: "parallel" | "serial" | "switch" | "literal";
  }) => Promise<void>;
  evaluate: (args: { input: Signal }) => Promise<Signal>;
  resolve: (args: { query: Signal }) => Promise<Signal>;
};

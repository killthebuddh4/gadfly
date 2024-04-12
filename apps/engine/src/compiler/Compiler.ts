import { Expression } from "./Expression.js";
import { Source } from "./Source.js";
import { Spec } from "./Spec.js";

export type Compiler = {
  source: Source | null;
  spec: Spec | null;
  expression: Expression | null;
  load: () => Promise<void>;
  lex: () => Promise<void>;
  parse: () => Promise<void>;
  exec: () => Promise<void>;
};

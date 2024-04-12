import { Compiler } from "./Compiler.js";
import { Source } from "./Source.js";
import { Spec } from "./Spec.js";

export type Lex = (args: {
  compiler: Compiler;
  source: Source;
}) => Promise<Spec>;

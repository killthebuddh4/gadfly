import { Compiler } from "./Compiler.js";
import { Source } from "./Source.js";
import { Expression } from "../expression/Expression.js";
import { Spec } from "./Spec.js";

export type Parse = (args: {
  compiler: Compiler;
  spec: Spec;
}) => Promise<Expression>;

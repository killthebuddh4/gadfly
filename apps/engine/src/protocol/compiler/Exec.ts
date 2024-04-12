import { Signal } from "../circuit/Signal.js";
import { Expression } from "../expression/Expression.js";
import { Compiler } from "./Compiler.js";

export type Exec = (args: {
  compiler: Compiler;
  expression: Expression;
}) => Promise<Signal>;

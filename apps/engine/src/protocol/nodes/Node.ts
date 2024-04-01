import { Analysis } from "./Analysis.js";
import { Analytic } from "./Analytic.js";
import { Context } from "./Context.js";
import { Parser } from "./Parser.js";
import { Synthetic } from "./Synthetic.js";
import { Binary } from "./Binary.js";
import { Input } from "./Input.js";
import { Output } from "./Output.js";
import { Generator } from "./Generator.js";

export type Node =
  | {
      type: "Analysis";
      value: Analysis;
      parent: Node | null;
      children: Node[];
    }
  | {
      type: "Analytic";
      value: Analytic;
      parent: Node;
      children: Node[];
    }
  | {
      type: "Context";
      value: Context;
      parent: Node | null;
      children: Node[];
    }
  | {
      type: "Parser";
      value: Parser;
      parent: Node | null;
      children: Node[];
    }
  | {
      type: "Synthetic";
      value: Synthetic;
      parent: Node | null;
      children: Node[];
    }
  | {
      type: "Binary";
      value: Binary;
      parent: Node | null;
      children: Node[];
    }
  | {
      type: "Input";
      value: Input;
      parent: Node | null;
      children: Node[];
    }
  | {
      type: "Output";
      value: Output;
      parent: Node | null;
      children: Node[];
    }
  | {
      type: "Generator";
      value: Generator;
      parent: Node | null;
      children: Node[];
    };

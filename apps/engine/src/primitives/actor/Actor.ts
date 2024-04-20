import { Log } from "../network/Log.js";
import { Signal } from "../network/Signal.js";

export type Actor = {
  id: string;

  spec: {
    name: Log;
    description: Log;
    inputs: Log[];
    outputs: Log;
    constraints: Log[];
  };

  inputs: Log[];
  outputs: Log[];
  feedback: Log;

  history: Array<{
    spec: {
      name: Signal;
      description: Signal;
      inputs: Signal[];
      outputs: Signal[];
      constraints: Signal[];
    };
    inputs: Signal[];
    outputs: Signal[];
    feedback: Signal;
  }>;

  describe: () => Promise<{
    name: Signal;
    description: Signal;
    inputs: Signal[];
    output: Signal;
    constraints: Signal[];
  } | null>;

  exec: (args: {
    spec: Partial<{
      name: Signal;
      description: Signal;
      inputs: Signal[];
      output: Signal;
      constraints: Signal[];
    }>;
  }) => Promise<void>;

  patch: (args: { feedback: Signal }) => Promise<void>;

  call: (args: { inputs: Signal[] }) => Promise<{ id: string }>;
};

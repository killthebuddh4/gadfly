import { Log } from "../memory/Log.js";
import { Signal } from "../memory/Signal.js";

export type Actor = {
  id: string;

  spec: {
    name: Log;
    description: Log;
    inputs: Log[];
    output: Log;
    constraints: Log[];
  };

  inputs: Log[];
  output: Log;
  feedback: Log;

  history: Array<{
    spec: {
      name: Signal;
      description: Signal;
      inputs: Signal[];
      output: Signal;
      constraints: Signal[];
    };
    inputs: Signal[];
    output: Signal;
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

  call: (args: { inputs: Signal[] }) => Promise<{ output: Signal }>;
};

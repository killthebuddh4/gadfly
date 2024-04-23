import { Log } from "../network/Log.js";

type Variable = {
  name: string;
  description: string;
  constraints: string;
  history: Log;
};

export type Actor = {
  inputs: {
    bound: Variable[];
    free: Variable[];
  };

  outputs: {
    bound: Variable[];
    free: Variable[];
  };
};

// export type Actor = {
//   describe: () => Promise<{
//     name: Signal;
//     description: Signal;
//     inputs: Signal[];
//     output: Signal;
//     constraints: Signal[];
//   } | null>;

//   exec: (args: {
//     spec: Partial<{
//       name: Signal;
//       description: Signal;
//       inputs: Signal[];
//       output: Signal;
//       constraints: Signal[];
//     }>;
//   }) => Promise<void>;

//   patch: (args: { feedback: Signal }) => Promise<void>;

//   call: (args: { inputs: Signal[] }) => Promise<{ id: string }>;
// };

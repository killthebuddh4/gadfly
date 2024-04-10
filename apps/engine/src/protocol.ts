export type Synthetic = {
  source: string;
  parse: (args: { query: string }) => Promise<string>;
};

export type Generator = ReturnType<
  (args: { prompt: string }) => {
    generate: (args: { history: Synthetic[] }) => Promise<Synthetic>;
  }
>;

export type Actor = ReturnType<
  (args: {
    protagonist: Generator;
    antagonist: Generator;
    arbiter: Generator;
  }) => Promise<Generator>
>;

export type Expression = {
  type: "parallel" | "serial" | "switch" | "literal";
};

export type Program = {
  root: Expression;
};

export type Signal = {
  type: "yield" | "query" | "abort" | "fork" | "exec" | "patch" | "kill";
  payload: Synthetic;
};

export type Emit = (args: { signal: Signal }) => Promise<void>;

export type Process = {
  yield: Emit;
  query: Emit;
  abort: Emit;
};

export type Dispatch = (args: {
  child: Process;
  signal: Signal;
}) => Promise<void>;

export type Supervisor = {
  fork: Dispatch;
  exec: Dispatch;
  patch: Dispatch;
  kill: Dispatch;
};

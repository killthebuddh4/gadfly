export type Expression = {
  id: string;
  context: string;
  parent: Expression | null;
  children: Expression[];
  expand: {
    parallel: () => Promise<void>;
    serial: () => Promise<void>;
    switch: () => Promise<void>;
    literal: () => Promise<void>;
  };
  evaluate: () => Promise<void>;
  reduce: () => Promise<void>;
  generate: (args: { message: string }) => Promise<string>;
};

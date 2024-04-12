import { Handler } from "../memory/Handler.js";
import { Memory } from "../memory/Memory.js";

export type Process = {
  id: string;
  path: string;
  parent: Process | null;
  children: Process[];

  input: Memory;
  output: Memory;
  log: Memory;
  error: Memory;
  exit: Memory;

  pipe: Handler;
  patch: Handler;
  kill: Handler;

  attach: {
    stdin: (args: { handler: Handler }) => Promise<{
      detach: () => Promise<void>;
    }>;
    stdout: (args: { handler: Handler }) => Promise<{
      detach: () => Promise<void>;
    }>;
    stderr: (args: { handler: Handler }) => Promise<{
      detach: () => Promise<void>;
    }>;
    stdlog: (args: { handler: Handler }) => Promise<{
      detach: () => Promise<void>;
    }>;
    exit: (args: { handler: Handler }) => Promise<{
      detach: () => Promise<void>;
    }>;
  };
};

import { Handler } from "../circuit/Handler.js";
import { Stream } from "../memory/Stream.js";

export type Process = {
  id: string;
  path: string;
  parent: Process | null;
  children: Process[];

  input: Stream;
  output: Stream;
  log: Stream;
  error: Stream;
  exit: Stream;

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

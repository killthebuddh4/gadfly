import { Handler } from "../signal/Handler.js";
import { Process } from "../process/Process.js";

export type Actor = {
  supervisor: Process;
  synthetic: Process;
  analytic: Process;
  controller: Process;
  workers: Process[];
  receive: Handler;
  exec: Handler;
  patch: Handler;
  kill: Handler;
  yield: Handler;
  query: Handler;
  error: Handler;
};

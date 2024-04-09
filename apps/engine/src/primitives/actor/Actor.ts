import { Handler } from "../signal/Handler.js";

export type Actor = {
  synthetic: {
    yield: Handler;
    query: Handler;
    abort: Handler;
  };
  analytic: {
    exec: Handler;
    patch: Handler;
    kill: Handler;
  };
};

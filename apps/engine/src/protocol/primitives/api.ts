import { z } from "zod";
import { schemas } from "./schemas.js";

export const api = {
  type: {
    create: {
      path: "/type",
      data: schemas.zType,
    },
    read: {
      path: "/type",
      query: z.object({ id: z.string().uuid() }),
      data: schemas.zType.or(z.null()),
    },
    values: {
      read: {
        path: "/type/values",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zValue),
      },
    },
    nodes: {
      read: {
        path: "/type/nodes",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zNode),
      },
    },
    edges: {
      read: {
        path: "/type/edges",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zEdge),
      },
    },
    graphs: {
      read: {
        path: "/type/graphs",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zGraph),
      },
    },
    logs: {
      read: {
        path: "/type/logs",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zLog),
      },
    },
    forks: {
      read: {
        path: "/type/forks",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zFork),
      },
    },
    branches: {
      read: {
        path: "/type/branches",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zBranch),
      },
    },
    commits: {
      read: {
        path: "/type/commits",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zCommit),
      },
    },
    patches: {
      read: {
        path: "/type/patches",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zPatch),
      },
    },
    machines: {
      read: {
        path: "/type/machines",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zMachine),
      },
    },
    states: {
      read: {
        path: "/type/states",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zState),
      },
    },
    transitions: {
      read: {
        path: "/type/transitions",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zTransition),
      },
    },
    trajectories: {
      read: {
        path: "/type/trajectories",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zTrajectory),
      },
    },
    phases: {
      read: {
        path: "/type/phases",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zPhase),
      },
    },
    signals: {
      read: {
        path: "/type/signals",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zSignal),
      },
    },
  },
  value: {
    create: {
      path: "/value",
      data: schemas.zValue,
    },
    read: {
      path: "/value",
      query: z.object({ id: z.string().uuid() }),
      data: schemas.zValue.or(z.null()),
    },
    type: {
      read: {
        path: "/value/type",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zType,
      },
    },
    value: {
      read: {
        path: "/value/value",
        query: z.object({ id: z.string().uuid() }),
        data: z.string(),
      },
    },
    graph: {
      read: {
        path: "/value/graph",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zGraph.or(z.null()),
      },
    },
    node: {
      read: {
        path: "/value/node",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zNode.or(z.null()),
      },
    },
    edge: {
      read: {
        path: "/value/edge",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zEdge.or(z.null()),
      },
    },
    log: {
      read: {
        path: "/value/log",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zLog.or(z.null()),
      },
    },
    fork: {
      read: {
        path: "/value/fork",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zFork.or(z.null()),
      },
    },
    branch: {
      read: {
        path: "/value/branch",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zBranch.or(z.null()),
      },
    },
    commit: {
      read: {
        path: "/value/commit",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zCommit.or(z.null()),
      },
    },
    patch: {
      read: {
        path: "/value/patch",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zPatch.or(z.null()),
      },
    },
    machine: {
      read: {
        path: "/value/machine",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zMachine.or(z.null()),
      },
    },
    state: {
      read: {
        path: "/value/state",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zState.or(z.null()),
      },
    },
    transition: {
      read: {
        path: "/value/transition",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zTransition.or(z.null()),
      },
    },
    trajectory: {
      read: {
        path: "/value/trajectory",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zTrajectory.or(z.null()),
      },
    },
    phase: {
      read: {
        path: "/value/phase",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zPhase.or(z.null()),
      },
    },
    signal: {
      read: {
        path: "/value/signal",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zSignal.or(z.null()),
      },
    },
  },
  graph: {
    create: {
      path: "/graph",
      data: schemas.zGraph,
    },
    read: {
      path: "/graph",
      query: z.object({ id: z.string().uuid() }),
      data: schemas.zGraph.or(z.null()),
    },
    type: {
      read: {
        path: "/graph/type",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zType,
      },
    },
    value: {
      read: {
        path: "/graph/value",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zValue,
      },
    },
    nodes: {
      read: {
        path: "/graph/nodes",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zNode),
      },
    },
    edges: {
      read: {
        path: "/graph/edges",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zEdge),
      },
    },
    log: {
      read: {
        path: "/graph/log",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zLog.or(z.null()),
      },
    },
    machine: {
      read: {
        path: "/graph/machine",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zMachine.or(z.null()),
      },
    },
    trajectory: {
      read: {
        path: "/graph/trajectory",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zTrajectory.or(z.null()),
      },
    },
  },
  node: {
    create: {
      path: "/node",
      data: schemas.zNode,
    },
    read: {
      path: "/node",
      query: z.object({ id: z.string().uuid() }),
      data: schemas.zNode.or(z.null()),
    },
    type: {
      read: {
        path: "/node/type",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zType,
      },
    },
    value: {
      read: {
        path: "/node/value",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zValue,
      },
    },
    graph: {
      read: {
        path: "/node/graph",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zGraph,
      },
    },
    upstream: {
      read: {
        path: "/node/upstream",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zEdge),
      },
    },
    downstream: {
      read: {
        path: "/node/downstream",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zEdge),
      },
    },
    commit: {
      read: {
        path: "/node/commit",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zCommit.or(z.null()),
      },
    },
    state: {
      read: {
        path: "/node/state",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zState.or(z.null()),
      },
    },
    phase: {
      read: {
        path: "/node/phase",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zPhase.or(z.null()),
      },
    },
  },
  edge: {
    create: {
      path: "/edge",
      data: schemas.zEdge,
    },
    read: {
      path: "/edge",
      query: z.object({ id: z.string().uuid() }),
      data: schemas.zEdge.or(z.null()),
    },
    type: {
      read: {
        path: "/edge/type",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zType,
      },
    },
    value: {
      read: {
        path: "/edge/value",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zValue,
      },
    },
    graph: {
      read: {
        path: "/edge/graph",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zGraph,
      },
    },
    from: {
      read: {
        path: "/edge/from",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zNode,
      },
    },
    to: {
      read: {
        path: "/edge/to",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zNode,
      },
    },
    patch: {
      read: {
        path: "/edge/patch",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zPatch.or(z.null()),
      },
    },
    transition: {
      read: {
        path: "/edge/transition",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zTransition.or(z.null()),
      },
    },
    signal: {
      read: {
        path: "/edge/signal",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zSignal.or(z.null()),
      },
    },
  },
  log: {
    create: {
      path: "/log",
      data: schemas.zLog,
    },
    read: {
      path: "/log",
      query: z.object({ id: z.string().uuid() }),
      data: schemas.zLog.or(z.null()),
    },
    type: {
      read: {
        path: "/log/type",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zType,
      },
    },
    value: {
      read: {
        path: "/log/value",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zValue,
      },
    },
    graph: {
      read: {
        path: "/log/graph",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zGraph,
      },
    },
    forks: {
      read: {
        path: "/log/forks",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zFork),
      },
    },
    branches: {
      read: {
        path: "/log/branches",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zBranch),
      },
    },
    commits: {
      read: {
        path: "/log/commits",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zCommit),
      },
    },
    patches: {
      read: {
        path: "/log/patches",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zPatch),
      },
    },
  },
  fork: {
    create: {
      path: "/fork",
      data: schemas.zFork,
    },
    read: {
      path: "/fork",
      query: z.object({ id: z.string().uuid() }),
      data: schemas.zFork.or(z.null()),
    },
    type: {
      read: {
        path: "/fork/type",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zType,
      },
    },
    value: {
      read: {
        path: "/fork/value",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zValue,
      },
    },
    branches: {
      read: {
        path: "/fork/branches",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zBranch),
      },
    },
    commits: {
      read: {
        path: "/fork/commits",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zCommit),
      },
    },
    patches: {
      read: {
        path: "/fork/patches",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zPatch),
      },
    },
  },
  branch: {
    create: {
      path: "/branch",
      data: schemas.zBranch,
    },
    read: {
      path: "/branch",
      query: z.object({ id: z.string().uuid() }),
      data: schemas.zBranch.or(z.null()),
    },
    type: {
      read: {
        path: "/branch/type",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zType,
      },
    },
    value: {
      read: {
        path: "/branch/value",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zValue,
      },
    },
    fork: {
      read: {
        path: "/branch/fork",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zFork,
      },
    },
    commits: {
      read: {
        path: "/branch/commits",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zCommit),
      },
    },
  },
  commit: {
    create: {
      path: "/commit",
      data: schemas.zCommit,
    },
    read: {
      path: "/commit",
      query: z.object({ id: z.string().uuid() }),
      data: schemas.zCommit.or(z.null()),
    },
    type: {
      read: {
        path: "/commit/type",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zType,
      },
    },
    value: {
      read: {
        path: "/commit/value",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zValue,
      },
    },
    node: {
      read: {
        path: "/commit/node",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zNode,
      },
    },
    log: {
      read: {
        path: "/commit/log",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zLog,
      },
    },
    fork: {
      read: {
        path: "/commit/fork",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zFork,
      },
    },
    branch: {
      read: {
        path: "/commit/branch",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zBranch,
      },
    },
    upstream: {
      read: {
        path: "/commit/upstream",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zPatch),
      },
    },
    downstream: {
      read: {
        path: "/commit/downstream",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zPatch),
      },
    },
    phase: {
      read: {
        path: "/commit/phase",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zPhase,
      },
    },
  },
  patch: {
    create: {
      path: "/patch",
      data: schemas.zPatch,
    },
    read: {
      path: "/patch",
      query: z.object({ id: z.string().uuid() }),
      data: schemas.zPatch.or(z.null()),
    },
    type: {
      read: {
        path: "/patch/type",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zType,
      },
    },
    value: {
      read: {
        path: "/patch/value",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zValue,
      },
    },
    edge: {
      read: {
        path: "/patch/edge",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zEdge,
      },
    },
    log: {
      read: {
        path: "/patch/log",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zLog,
      },
    },
    fork: {
      read: {
        path: "/patch/fork",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zFork,
      },
    },
    branch: {
      read: {
        path: "/patch/branch",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zBranch,
      },
    },
    from: {
      read: {
        path: "/patch/from",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zCommit,
      },
    },
    to: {
      read: {
        path: "/patch/to",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zCommit,
      },
    },
  },
  machine: {
    create: {
      path: "/machine",
      data: schemas.zMachine,
    },
    read: {
      path: "/machine",
      query: z.object({ id: z.string().uuid() }),
      data: schemas.zMachine.or(z.null()),
    },
    type: {
      read: {
        path: "/machine/type",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zType,
      },
    },
    value: {
      read: {
        path: "/machine/value",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zValue,
      },
    },
    graph: {
      read: {
        path: "/machine/graph",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zGraph,
      },
    },
    states: {
      read: {
        path: "/machine/states",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zState),
      },
    },
    transitions: {
      read: {
        path: "/machine/transitions",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zTransition),
      },
    },
    trajectories: {
      read: {
        path: "/machine/trajectories",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zTrajectory),
      },
    },
  },
  state: {
    create: {
      path: "/state",
      data: schemas.zState,
    },
    read: {
      path: "/state",
      query: z.object({ id: z.string().uuid() }),
      data: schemas.zState.or(z.null()),
    },
    type: {
      read: {
        path: "/state/type",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zType,
      },
    },
    value: {
      read: {
        path: "/state/value",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zValue,
      },
    },
    node: {
      read: {
        path: "/state/node",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zNode,
      },
    },
    phases: {
      read: {
        path: "/state/phases",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zPhase),
      },
    },
    machine: {
      read: {
        path: "/state/machine",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zMachine,
      },
    },
    upstream: {
      read: {
        path: "/state/upstream",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zTransition),
      },
    },
    downstream: {
      read: {
        path: "/state/downstream",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zTransition),
      },
    },
  },
  transition: {
    create: {
      path: "/transition",
      data: schemas.zTransition,
    },
    read: {
      path: "/transition",
      query: z.object({ id: z.string().uuid() }),
      data: schemas.zTransition.or(z.null()),
    },
    type: {
      read: {
        path: "/transition/type",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zType,
      },
    },
    value: {
      read: {
        path: "/transition/value",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zValue,
      },
    },
    edge: {
      read: {
        path: "/transition/edge",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zEdge,
      },
    },
    machine: {
      read: {
        path: "/transition/machine",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zMachine,
      },
    },
    from: {
      read: {
        path: "/transition/from",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zState,
      },
    },
    to: {
      read: {
        path: "/transition/to",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zState,
      },
    },
  },
  trajectory: {
    create: {
      path: "/trajectory",
      data: schemas.zTrajectory,
    },
    read: {
      path: "/trajectory",
      query: z.object({ id: z.string().uuid() }),
      data: schemas.zTrajectory.or(z.null()),
    },
    type: {
      read: {
        path: "/trajectory/type",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zType,
      },
    },
    value: {
      read: {
        path: "/trajectory/value",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zValue,
      },
    },
    graph: {
      read: {
        path: "/trajectory/graph",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zGraph,
      },
    },
    machine: {
      read: {
        path: "/trajectory/machine",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zMachine,
      },
    },
    phases: {
      read: {
        path: "/trajectory/phases",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zPhase),
      },
    },
    signals: {
      read: {
        path: "/trajectory/signals",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zSignal),
      },
    },
  },
  phase: {
    create: {
      path: "/phase",
      data: schemas.zPhase,
    },
    read: {
      path: "/phase",
      query: z.object({ id: z.string().uuid() }),
      data: schemas.zPhase.or(z.null()),
    },
    type: {
      read: {
        path: "/phase/type",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zType,
      },
    },
    value: {
      read: {
        path: "/phase/value",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zValue,
      },
    },
    node: {
      read: {
        path: "/phase/node",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zNode,
      },
    },
    state: {
      read: {
        path: "/phase/state",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zState,
      },
    },
    commits: {
      read: {
        path: "/phase/commits",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zCommit),
      },
    },
    trajectory: {
      read: {
        path: "/phase/trajectory",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zTrajectory,
      },
    },
    upstream: {
      read: {
        path: "/phase/upstream",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zSignal),
      },
    },
    downstream: {
      read: {
        path: "/phase/downstream",
        query: z.object({ id: z.string().uuid() }),
        data: z.array(schemas.zSignal),
      },
    },
  },
  signal: {
    create: {
      path: "/signal",
      data: schemas.zSignal,
    },
    read: {
      path: "/signal",
      query: z.object({ id: z.string().uuid() }),
      data: schemas.zSignal.or(z.null()),
    },
    type: {
      read: {
        path: "/signal/type",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zType,
      },
    },
    value: {
      read: {
        path: "/signal/value",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zValue,
      },
    },
    edge: {
      read: {
        path: "/signal/edge",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zEdge,
      },
    },
    trajectory: {
      read: {
        path: "/signal/trajectory",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zTrajectory,
      },
    },
    from: {
      read: {
        path: "/signal/from",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zPhase,
      },
    },
    to: {
      read: {
        path: "/signal/to",
        query: z.object({ id: z.string().uuid() }),
        data: schemas.zPhase,
      },
    },
  },
};

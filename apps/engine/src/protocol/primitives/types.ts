export namespace Primitives {
  export type Type = {
    id: string;
    created_at: string;
    updated_at: string;
    url: string;
    description: string;
    values: () => Promise<Value[]>;
    nodes: () => Promise<Node[]>;
    edges: () => Promise<Edge[]>;
    graphs: () => Promise<Graph[]>;
    logs: () => Promise<Log[]>;
    forks: () => Promise<Fork[]>;
    branches: () => Promise<Branch[]>;
    commits: () => Promise<Commit[]>;
    patches: () => Promise<Patch[]>;
    machines: () => Promise<Machine[]>;
    states: () => Promise<State[]>;
    transitions: () => Promise<Transition[]>;
    trajectories: () => Promise<Trajectory[]>;
    phases: () => Promise<Phase[]>;
    signals: () => Promise<Signal[]>;
  };

  export type Value = {
    id: string;
    created_at: string;
    updated_at: string;
    type_id: string;
    value: string;
    type: () => Promise<Type>;
    graph: () => Promise<Graph | null>;
    node: () => Promise<Node | null>;
    edge: () => Promise<Edge | null>;
    log: () => Promise<Log | null>;
    fork: () => Promise<Fork | null>;
    branch: () => Promise<Branch | null>;
    commit: () => Promise<Commit | null>;
    patch: () => Promise<Patch | null>;
    machine: () => Promise<Machine | null>;
    state: () => Promise<State | null>;
    transition: () => Promise<Transition | null>;
    trajectory: () => Promise<Trajectory | null>;
    phase: () => Promise<Phase | null>;
    signal: () => Promise<Signal | null>;
  };

  export type Graph = {
    id: string;
    created_at: string;
    updated_at: string;
    type_id: string;
    value_id: string;
    type: () => Promise<Type>;
    value: () => Promise<Value>;
    nodes: () => Promise<Node[]>;
    edges: () => Promise<Edge[]>;
    log: () => Promise<Log | null>;
    machine: () => Promise<Machine | null>;
    trajectory: () => Promise<Trajectory | null>;
  };

  export type Node = {
    id: string;
    created_at: string;
    updated_at: string;
    type_id: string;
    value_id: string;
    graph_id: string;
    type: () => Promise<Type>;
    value: () => Promise<Value>;
    graph: () => Promise<Graph>;
    upstream: () => Promise<Edge[]>;
    downstream: () => Promise<Edge[]>;
    commit: () => Promise<Commit | null>;
    state: () => Promise<State | null>;
    phase: () => Promise<Phase | null>;
  };

  export type Edge = {
    id: string;
    created_at: string;
    updated_at: string;
    type_id: string;
    value_id: string;
    graph_id: string;
    from_id: string;
    to_id: string;
    type: () => Promise<Type>;
    value: () => Promise<Value>;
    graph: () => Promise<Graph>;
    from: () => Promise<Node>;
    to: () => Promise<Node>;
    patch: () => Promise<Patch | null>;
    transition: () => Promise<Transition | null>;
    signal: () => Promise<Signal | null>;
  };

  export type Log = {
    id: string;
    created_at: string;
    updated_at: string;
    type_id: string;
    value_id: string;
    graph_id: string;
    type: () => Promise<Type>;
    value: () => Promise<Value>;
    graph: () => Promise<Graph>;
    forks: () => Promise<Fork[]>;
    branches: () => Promise<Branch[]>;
    commits: () => Promise<Commit[]>;
    patches: () => Promise<Patch[]>;
  };

  export type Fork = {
    id: string;
    created_at: string;
    updated_at: string;
    type_id: string;
    value_id: string;
    type: () => Promise<Type>;
    value: () => Promise<Value>;
    branches: () => Promise<Branch[]>;
    commits: () => Promise<Commit[]>;
    patches: () => Promise<Patch[]>;
  };

  export type Branch = {
    id: string;
    created_at: string;
    updated_at: string;
    type_id: string;
    value_id: string;
    fork_id: string;
    type: () => Promise<Type>;
    value: () => Promise<Value>;
    fork: () => Promise<Fork>;
    commits: () => Promise<Commit[]>;
  };

  export type Commit = {
    id: string;
    created_at: string;
    updated_at: string;
    type_id: string;
    value_id: string;
    node_id: string;
    branch_id: string;
    phase_id: string;
    type: () => Promise<Type>;
    value: () => Promise<Value>;
    node: () => Promise<Node>;
    log: () => Promise<Log>;
    fork: () => Promise<Fork>;
    branch: () => Promise<Branch>;
    upstream: () => Promise<Patch[]>;
    downstream: () => Promise<Patch[]>;
    phase: () => Promise<Phase>;
  };

  export type Patch = {
    id: string;
    created_at: string;
    updated_at: string;
    type_id: string;
    value_id: string;
    edge_id: string;
    type: () => Promise<Type>;
    value: () => Promise<Value>;
    edge: () => Promise<Edge>;
    from: () => Promise<Commit>;
    to: () => Promise<Commit>;
  };

  export type Machine = {
    id: string;
    created_at: string;
    updated_at: string;
    type_id: string;
    value_id: string;
    graph_id: string;
    type: () => Promise<Type>;
    value: () => Promise<Value>;
    graph: () => Promise<Graph>;
    states: () => Promise<State[]>;
    transitions: () => Promise<Transition[]>;
    trajectories: () => Promise<Trajectory[]>;
  };

  export type State = {
    id: string;
    created_at: string;
    updated_at: string;
    type_id: string;
    value_id: string;
    node_id: string;
    type: () => Promise<Type>;
    value: () => Promise<Value>;
    node: () => Promise<Node>;
    phases: () => Promise<Phase[]>;
    machine: () => Promise<Machine>;
    upstream: () => Promise<Transition[]>;
    downstream: () => Promise<Transition[]>;
  };

  export type Transition = {
    id: string;
    created_at: string;
    updated_at: string;
    type_id: string;
    value_id: string;
    edge_id: string;
    type: () => Promise<Type>;
    value: () => Promise<Value>;
    edge: () => Promise<Edge>;
    machine: () => Promise<Machine>;
    from: () => Promise<State>;
    to: () => Promise<State>;
  };

  export type Trajectory = {
    id: string;
    created_at: string;
    updated_at: string;
    type_id: string;
    value_id: string;
    graph_id: string;
    machine_id: string;
    type: () => Promise<Type>;
    value: () => Promise<Value>;
    graph: () => Promise<Graph>;
    machine: () => Promise<Machine>;
    phases: () => Promise<Phase[]>;
    signals: () => Promise<Signal[]>;
  };

  export type Phase = {
    id: string;
    created_at: string;
    updated_at: string;
    type_id: string;
    value_id: string;
    node_id: string;
    state_id: string;
    type: () => Promise<Type>;
    value: () => Promise<Value>;
    node: () => Promise<Node>;
    state: () => Promise<State>;
    commits: () => Promise<Commit[]>;
    trajectory: () => Promise<Trajectory>;
    upstream: () => Promise<Signal[]>;
    downstream: () => Promise<Signal[]>;
  };

  export type Signal = {
    id: string;
    created_at: string;
    updated_at: string;
    type_id: string;
    value_id: string;
    edge_id: string;
    type: () => Promise<Type>;
    value: () => Promise<Value>;
    edge: () => Promise<Edge>;
    trajectory: () => Promise<Trajectory>;
    from: () => Promise<Phase>;
    to: () => Promise<Phase>;
  };
}

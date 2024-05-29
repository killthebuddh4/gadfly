import { z } from "zod";

const zType = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  description: z.string().min(1),
});

const zValue = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  type_id: z.string().uuid(),
  value: z.string().min(1),
});

const zGraph = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
});

const zNode = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  graph_id: z.string().uuid(),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
});

const zEdge = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  graph_id: z.string().uuid(),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
  from_id: z.string().uuid(),
  to_id: z.string().uuid(),
});

const zLog = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  graph_id: z.string().uuid(),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
});

const zFork = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
});

const zBranch = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
  fork_id: z.string().uuid(),
});

const zCommit = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
  node_id: z.string().uuid(),
  branch_id: z.string().uuid(),
  phase_id: z.string().uuid(),
});

const zPatch = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
  edge_id: z.string().uuid(),
});

const zMachine = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
  graph_id: z.string().uuid(),
});

const zState = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
  node_id: z.string().uuid(),
});

const zTransition = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
  edge_id: z.string().uuid(),
});

const zTrajectory = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
  graph_id: z.string().uuid(),
  machine_id: z.string().uuid(),
});

const zPhase = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
  node_id: z.string().uuid(),
  state_id: z.string().uuid(),
});

const zSignal = z.object({
  id: z.string().uuid(),
  created_at: z.date().or(z.string().pipe(z.coerce.date())),
  updated_at: z.date().or(z.string().pipe(z.coerce.date())),
  type_id: z.string().uuid(),
  value_id: z.string().uuid(),
  edge_id: z.string().uuid(),
});

export const schemas = {
  zType,
  zValue,
  zGraph,
  zNode,
  zEdge,
  zLog,
  zFork,
  zBranch,
  zCommit,
  zPatch,
  zMachine,
  zState,
  zTransition,
  zTrajectory,
  zPhase,
  zSignal,
};

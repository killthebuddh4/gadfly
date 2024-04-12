import { Generation } from "./Generation.js";

export type Reduce = (args: { generation: Generation }) => Promise<Generation>;

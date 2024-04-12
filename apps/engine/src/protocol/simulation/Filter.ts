import { Generation } from "./Generation.js";

export type Filter = (args: { generation: Generation }) => Promise<Generation>;

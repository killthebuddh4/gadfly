import { Generation } from "./Generation.js";

export type Map = (args: { generation: Generation }) => Promise<Generation>;

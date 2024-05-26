import { Graph } from "./Graph.js";
import { Supervisor } from "./Supervisor.js";
import { Hypervisor } from "./Hypervisor.js";

export type Actor = {
  supervisors: {
    read: () => Promise<Supervisor[]>;
  };
  actor: {
    read: () => Promise<Graph>;
  };
  hypervisors: {
    read: () => Promise<Hypervisor[]>;
  };
};

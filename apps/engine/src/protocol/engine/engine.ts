type Action = {
  id: string;
};

type Signal = {
  id: string;
};

type Machine = {
  id: string;
  init: () => Action[];
  signal: () => Signal[];
};

type Engine = {
  id: string;
  machine: Machine;
};

const create = async ({ machine }: { machine: Machine }) => {
  return {
    id: `engine/${machine.id}`,
    machine,
  };
};

export const engine = () => {};

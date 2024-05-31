export const actor = async ({ goal }: { goal: string }) => {
  const machine = await selectMachine({ goal });
  const
};

export const selectMachine = async ({
  goal,
}: {
  goal: string;
}): Promise<Machine> => {
  if (goal.length % 2 === 0) {
    return {
      id: async () => "machine-for-even",
    };
  } else {
    return {
      id: async () => "machine-for-odd",
    };
  }
};


type Actor = {
  id: string;
};

type Machine = {
  id: string;
  boot: () => Promise<Trajectory>;
  phases: () => Promise<Phase[]>;
  rules: () => Promise<Rule[]>;
  trajectories: () => Promise<Trajectory[]>;
};

type Trajectory = {
  id: string;
  initial: () => Promise<Phase>;
}

type Phase = {
  id: string;
  upstream: () => Promise<Rule[]>;
  downstream: () => Promise<Rule[]>;
};

type Rule = {
  id: string;
  from: () => Promise<Phase>;
  to: () => Promise<Phase>;
};
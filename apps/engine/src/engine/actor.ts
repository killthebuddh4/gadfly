export const actor = async ({ goal }: { goal: string }) => {
  const machine = await selectMachine({ goal });
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
  id: () => Promise<string>;
};

type Machine = {
  id: () => Promise<string>;
};

export const getAvailableActions = async ({ id }: { id: string }) => {
  return [
    { type: "patch" },
    { type: "fork" },
    { type: "branch" },
    { type: "exec" },
    { type: "kill" },
  ];
};

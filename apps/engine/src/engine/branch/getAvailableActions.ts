export const getAvailableActions = async ({ id }: { id: string }) => {
  return [{ type: "exec" }, { type: "kill" }];
};

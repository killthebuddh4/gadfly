export type Supervisor = {
  getPermissionToGenerate: () => Promise<boolean>;
};

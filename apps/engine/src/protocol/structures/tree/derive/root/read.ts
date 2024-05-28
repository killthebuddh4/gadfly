import { read as branchesRead } from "../../atom/branches/read.js";
import { read as pathsRead } from "../../atom/paths/read.js";

export const read = async ({ id }: { id: string }) => {
  const branches = await branchesRead({ id });
  const paths = await pathsRead({ id });

  const isRoot = (branchId: string) => {
    return !paths.some((path) => path.to_id === branchId);
  };

  const roots = branches.filter((branch) => isRoot(branch.id));

  if (roots.length > 1) {
    throw new Error("Multiple roots found");
  }

  if (roots.length === 0) {
    return null;
  }

  return roots[0];
};

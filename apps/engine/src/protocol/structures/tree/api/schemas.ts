import { z } from "zod";
import { zGraph, zNode } from "../../../primitives/api/schemas.js";
import { zEdge } from "../../../primitives/api/schemas.js";

export const zTree = zGraph;

export const zCreateTreeBody = zTree.omit({ id: true });

export const zCreateTreeData = zTree;

export const zReadTreeParams = zTree.pick({ id: true });

export const zReadTreeData = zTree;

export const zPath = zEdge;

export const zCreatePathParams = z.object({
  id: z.string().uuid(),
});

export const zCreatePathBody = zPath.omit({ id: true });

export const zReadPathParams = z.object({
  id: z.string().uuid(),
  path_id: z.string().uuid(),
});

export const zReadPathData = zPath;

export const zReadPathsParams = z.object({
  id: z.string().uuid(),
});

export const zReadPathsData = z.array(zPath);

export const zBranch = zNode;

export const zCreateBranchParams = z.object({
  id: z.string().uuid(),
});

export const zCreateBranchBody = zBranch.omit({ id: true });

export const zReadBranchParams = z.object({
  id: z.string().uuid(),
  branch_id: z.string().uuid(),
});

export const zReadBranchData = zBranch;

export const zReadBranchesParams = z.object({
  id: z.string().uuid(),
});

export const zReadBranchesData = z.array(zBranch);

export const zReadLeavesParams = z.object({
  id: z.string().uuid(),
});

export const zReadLeavesData = z.array(zBranch);

export const zReadRootParams = z.object({
  id: z.string().uuid(),
});

export const zReadRootData = zBranch;

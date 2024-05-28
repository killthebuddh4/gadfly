import { create as branchCreate } from "../atom/branch/create.js";
import { create as pathCreate } from "../atom/path/create.js";
import { read as branchRead } from "../atom/branch/read.js";
import { MAX_DEPTH } from "../lib/MAX_DEPTH.js";
import { read as depthRead } from "../atom/branch/derive/depth/read.js";

export const expand = async (args: {
  paths: Array<{
    id: string;
    graph_id: string;
    type_id: string;
    value_id: string;
    from_id: string;
    to_id: string;
  }>;
  branches: Array<{
    id: string;
    graph_id: string;
    type_id: string;
    value_id: string;
  }>;
}) => {
  if (args.paths.length === 0) {
    throw new Error("Paths must not be empty");
  }

  if (args.paths.length !== args.branches.length) {
    throw new Error("Paths and branches must have the same length");
  }

  const graphId = args.paths[0].graph_id;

  for (const { graph_id } of args.paths) {
    if (graph_id !== graphId) {
      throw new Error("All paths and branches must have the same graph_id");
    }
  }

  for (const { graph_id } of args.branches) {
    if (graph_id !== graphId) {
      throw new Error("All paths and branches must have the same graph_id");
    }
  }

  const uniqueToIds = new Set(args.paths.map(({ to_id }) => to_id));

  if (uniqueToIds.size !== args.paths.length) {
    throw new Error("Every path's to_id must be unique");
  }

  for (const { id } of args.branches) {
    if (!uniqueToIds.has(id)) {
      throw new Error("Every branch must be in the paths");
    }
  }

  const fromBranch = await branchRead({ id: args.paths[0].from_id });

  if (!fromBranch) {
    throw new Error("From branch not found");
  }

  if (fromBranch.graph_id !== graphId) {
    throw new Error(
      "From branch must have the same graph_id as the paths and branches",
    );
  }

  const depth = await depthRead(fromBranch);

  if (depth >= MAX_DEPTH) {
    throw new Error("Maximum depth reached");
  }

  const branches = await Promise.all(args.branches.map((b) => branchCreate(b)));
  const paths = await Promise.all(args.paths.map((path) => pathCreate(path)));

  return { from: fromBranch, paths, branches };
};

import { z } from "zod";
import { zCreateRootBody as graphCreateRootBody } from "../../primitives/graph/schemas.js";
import { zCreateRootBody as nodeCreateRootBody } from "../../primitives/node/schemas.js";
import { zCreateRootBody as edgeCreateRootBody } from "../../primitives/edge/schemas.js";
import { zCreateRootBody as pointerCreateRootBody } from "../../primitives/pointer/schemas.js";
import { create as graphRootCreate } from "../../primitives/graph/create.js";
import { create as nodeRootCreate } from "../../primitives/node/create.js";
import { create as edgeRootCreate } from "../../primitives/edge/create.js";
import { create as pointerRootCreate } from "../../primitives/pointer/create.js";

export const create = async (args: {
  graph: z.infer<typeof graphCreateRootBody>;
  nodes: {
    from: Array<z.infer<typeof nodeCreateRootBody>>;
    to: Array<z.infer<typeof nodeCreateRootBody>>;
  };
  edges: Array<z.infer<typeof edgeCreateRootBody>>;
  pointers: Array<z.infer<typeof pointerCreateRootBody>>;
}) => {
  const graph = await graphRootCreate(args.graph);

  const fromNodes = await Promise.all(
    args.nodes.from.map((node) => nodeRootCreate(node)),
  );

  const toNodes = await Promise.all(
    args.nodes.to.map((node) => nodeRootCreate(node)),
  );

  const edges = await Promise.all(
    args.edges.map((edge) => edgeRootCreate(edge)),
  );

  const pointers = await Promise.all(
    args.pointers.map((pointer) => pointerRootCreate(pointer)),
  );

  return { graph, nodes: { from: fromNodes, to: toNodes }, edges, pointers };
};

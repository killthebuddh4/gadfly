import { Node } from "./nodes/Node.js";
import { GadflyEvent } from "./events/GadflyEvent.js";

export const emit = ({ node, event }: { node: Node; event: GadflyEvent }) => {
  console.log("Emitting event", event.type, "for node", node.id);
};

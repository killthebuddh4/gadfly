import { Node } from "../primitives/node/Node.js";

export type Daemon = (args: { synthetic: Node; analytic: Node }) => Node;

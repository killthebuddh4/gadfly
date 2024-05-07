import { Element } from "../../primitives/Element.js";

export type Commit = {
  element: () => Promise<Element>;
};

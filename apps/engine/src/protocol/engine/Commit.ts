import { Branch } from "./Branch.js";
import { Element } from "../types/Element.js";
import { Artifact } from "./Artifact.js";

export type Commit<S> = {
  unwrap: () => Promise<Element<Artifact<S>>>;
  container: () => Promise<Branch<S>>;
  upstream: () => Promise<Commit<S> | null>;
  downstream: () => Promise<Commit<S> | null>;
};

export type Artifact<S> = {
  unwrap: () => Promise<S>;
};

import { Flow } from "../types/Flow.js";

export type Expression = {
  unwrap: () => Promise<Flow<Expression>>;

  tail: () => Promise<Expression>;
  heads: () => Promise<Expression[]>;

  container: () => Promise<Expression>;
  upstream: () => Promise<Expression>;
  downstream: () => Promise<Expression[]>;
};

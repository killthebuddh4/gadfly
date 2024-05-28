import { search as graphSearch } from "../../../primitives/graph/search.js";

export const search = async () => {
  const graphs = await graphSearch();

  return graphs;
};

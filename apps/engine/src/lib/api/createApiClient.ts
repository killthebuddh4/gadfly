import { readClient } from "./readClient.js";
import { writeClient } from "./writeClient.js";
import { searchClient } from "./searchClient.js";

export const createApiClient = {
  reader: readClient,
  writer: writeClient,
  searcher: searchClient,
};

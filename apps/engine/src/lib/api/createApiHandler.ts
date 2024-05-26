import { readHandler } from "./readHandler.js";
import { writeHandler } from "./writeHandler.js";
import { searchHandler } from "./searchHandler.js";

export const createApiHandler = {
  reader: readHandler,
  writer: writeHandler,
  searcher: searchHandler,
};

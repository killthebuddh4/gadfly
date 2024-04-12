import { Stream } from "../memory/Stream.js";
import { Filter } from "../memory/Filter.js";

export type Proxy = {
  id: string;
  stream: Stream;
  filter: Filter;
};

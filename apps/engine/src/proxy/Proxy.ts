import { Stream } from "../stream/Stream.js";
import { Filter } from "../stream/Filter.js";

export type Proxy = {
  id: string;
  stream: Stream;
  filter: Filter;
};

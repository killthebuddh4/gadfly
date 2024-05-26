import { Ghost } from "./Ghost.js";

export type Trajectory = {
  ghost: {
    read: () => Promise<Ghost>;
  };
};

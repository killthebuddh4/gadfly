import { Node } from "./Node.js";

export const serialize = ({ node }: { node: Node }) => {
  return JSON.parse(
    JSON.stringify(node, (key: string, value: Node | null) => {
      if (key !== "parent") {
        return value;
      } else {
        if (value === null) {
          return null;
        } else {
          return value.actor.id;
        }
      }
    }),
  );
};

import { z } from "zod";
import { client } from "engine/protocol/primitives/client.js";
import { config } from "@/lib/config";
import { Branded } from "@/lib/brand/Branded.js";
import { create } from "@/lib/brand/create";

type Field = Branded<
  "type" | "value" | "graph" | "upstream" | "downstream",
  "Field"
>;

export const field = create<Field, string>({
  validate: (value) =>
    value === "type" ||
    value === "value" ||
    value === "graph" ||
    value === "upstream" ||
    value === "downstream",
});

type PrefixedInput = Branded<string, "PrefixedInput">;

export const prefixedInput = create<PrefixedInput, string>({
  validate: (value) => typeof value === "string" && value.startsWith("/"),
});

export const zPrefixedInput = z.string().transform((value) => {
  if (!value.startsWith("/")) {
    throw new Error("Invalid prefix.");
  }

  return value.slice(1);
});

export const zAction = z.union([z.literal("read"), z.literal("go")]);

export const zCommand = z.string().transform((value) => {
  const [maybeAction, ...maybeArgs] = value.split(" ");
  const action = zAction.parse(maybeAction);
  const args = z.array(z.string()).parse(maybeArgs);
  return { action, args };
});

import globals from "globals";
import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["*.ts", "**/*.ts"],
    plugins: {
      "@typescript-eslint": ts,
    },
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaVersion: 2020,
      },
    },
    rules: {
      ...ts.configs.recommended.rules,
    },
  },
];

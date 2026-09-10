import eslintPluginAstro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";
export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.astro"],
    processor: "astro/client-side-ts",
    rules: {},
  },
];

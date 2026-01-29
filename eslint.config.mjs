import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-unused-vars": "warn",
      "no-console": "warn",
      eqeqeq: ["error", "always"],
      curly: "error",
      indent: ["error", 2],
      "no-var": "error",
      "prefer-const": "error",
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "space-before-function-paren": ["error", "never"],
      "keyword-spacing": ["error", { before: true, after: true }],
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
      "no-duplicate-imports": "error",
      "no-debugger": "error",
      "arrow-spacing": ["error", { before: true, after: true }],
      "prefer-arrow-callback": "error",
      "space-infix-ops": "error",
      "spaced-comment": ["error", "always"],
      "no-empty": "error",
      "no-undef": "error",
    },
  },
  pluginReact.configs.flat.recommended,
]);

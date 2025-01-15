import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals", // Next.js recommended rules
    "next/typescript", // Next.js TypeScript rules
    "plugin:@typescript-eslint/recommended" // TypeScript-specific linting rules
  ),
  {
    files: ["**/*.ts", "**/*.tsx"], // Apply only to TypeScript files
    parser: "@typescript-eslint/parser", // Use the TypeScript parser
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
      // Enable additional rules
      "@typescript-eslint/no-explicit-any": "warn", // Warn against the use of `any`
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ], // Ignore unused variables prefixed with _
      "@typescript-eslint/explicit-module-boundary-types": "off", // Optional rule for module boundaries
      "prefer-spread": "error", // Enforce spread operator
      "no-console": ["warn", { allow: ["warn", "error"] }], // Allow warnings and errors in console
    },
  },
  {
    files: ["**/*.js", "**/*.jsx"], // Apply only to JavaScript files
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];

export default eslintConfig;

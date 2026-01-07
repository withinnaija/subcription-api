// import js from "@eslint/js";
// import globals from "globals";
// import { defineConfig } from "eslint/config";

// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
// ]);
// import js from "@eslint/js";
// import globals from "globals";
// import { defineConfig } from "eslint/config";

// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
// ]);
// {
//   "env": {
//     "node": true,
//     "es2021": true
//   },
//   "extends": "eslint:recommended",
//   "parserOptions": {
//     "ecmaVersion": "latest",
//     "sourceType": "module"
//   },
//   "rules": {}
// }

import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node, // ✅ Changed from globals.browser to globals.node
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
];

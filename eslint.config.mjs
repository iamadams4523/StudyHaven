import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

<<<<<<< HEAD
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];
=======
const eslintConfig = [...compat.extends("next/core-web-vitals")];
>>>>>>> 51919d43f5cd175a9679e2775f0706424910c97c

export default eslintConfig;

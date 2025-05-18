import { FlatCompat } from '@eslint/eslintrc'
import { globalIgnores } from "eslint/config";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'plugin:import/recommended',
      'plugin:import/warnings',
      'prettier',
    ],
  }),
  globalIgnores([
    "**/node_modules/",
    "**/.next/",
    "**/build/",
    "**/build/**/*",
    "public/",
    "**/public/"
	]),
]

export default eslintConfig

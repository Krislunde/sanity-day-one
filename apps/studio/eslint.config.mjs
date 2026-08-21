import studio from '@sanity/eslint-config-studio'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default [
  ...studio,
  {
    ignores: ['dist', 'node_modules', '.sanity'],
    files: ['**/*.ts', '**/*.tsx'],
    // @sanity/eslint-config-studio already registers typescript-eslint (as the
    // `typescript` plugin) and sets its parser for **/*.ts?(x), so neither is
    // re-declared here.
    plugins: {
      prettier,
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'typescript/consistent-type-imports': 'error',
    },
  },
]

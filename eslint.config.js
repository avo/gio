import js from '@eslint/js';
import globals from 'globals';
import reactHooks, { configs, rules } from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import sort from 'eslint-plugin-sort';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      sort,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...sort.configs.recommended.rules,
      'react/no-unknown-property': ['error', { ignore: ['css'] }] /* fix emotion css */,
      'react/no-unescaped-entities': 'off' /* temp - make text with ' &apos; readable */,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'sort/type-properties': ['error'],
      'sort/string-enums': ['error'],
      'sort/string-unions': ['error'],
    },
  }
);

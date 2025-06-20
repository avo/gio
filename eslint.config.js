import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import * as mdx from 'eslint-plugin-mdx'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks, { configs, rules } from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import sort from 'eslint-plugin-sort'
import globals from 'globals'

export default [
  sort.configs['flat/recommended'],
  prettier,
  { ignores: ['dist', '.yarn'] },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      import: importPlugin,
      prettier: eslintPluginPrettier,
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
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/no-unresolved': 'error', // Allow omitting extensions for these file types
      'prettier/prettier': 'error',
      'react/jsx-max-props-per-line': [1, { when: 'multiline' }] /* max props per line */,
      'react/jsx-sort-props': ['error', { reservedFirst: true }] /* sort props alpha */,
      'react/no-unescaped-entities': 'off' /* temp - make text with ' &apos; readable */,
      'react/no-unknown-property': ['error', { ignore: ['css'] }] /* fix emotion css */,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'sort/string-enums': ['error'],
      'sort/string-unions': ['error'],
      'sort/type-properties': ['error'],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'], // Resolve these extensions
        },
      },
      react: { version: '18.3' },
    },
  },
  {
    files: ['**/*.mdx'],
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({ lintCodeBlocks: true }),

    rules: {
      ...mdx.flatCodeBlocks.rules,
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
    },
  },
]

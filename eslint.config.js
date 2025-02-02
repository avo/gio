import js from '@eslint/js'
import globals from 'globals'
import reactHooks, { configs, rules } from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import sort from 'eslint-plugin-sort'
import react from 'eslint-plugin-react'
import mdx from 'eslint-plugin-mdx'
import typescript from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import mdxParser from 'eslint-mdx'

export default [
  { ignores: ['dist'] },
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
    settings: { react: { version: '18.3' } },
    plugins: {
      '@typescript-eslint': typescript,
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
      'react/jsx-sort-props': ['error', { reservedFirst: true }] /* sort props alpha */,
      'react/no-unknown-property': ['error', { ignore: ['css'] }] /* fix emotion css */,
      'react/no-unescaped-entities': 'off' /* temp - make text with ' &apos; readable */,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/jsx-max-props-per-line': [1, { when: 'multiline' }] /* max props per line */,
      'sort/type-properties': ['error'],
      'sort/string-enums': ['error'],
      'sort/string-unions': ['error'],
    },
  },
  {
    files: ['**/*.mdx'],
    plugins: {
      mdx,
    },
    languageOptions: {
      parser: mdxParser,
    },
    rules: {
      ...mdx.configs.recommended.rules,
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
    },
  },
]

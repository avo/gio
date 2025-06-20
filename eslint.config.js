import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import * as mdx from 'eslint-plugin-mdx'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import sort from 'eslint-plugin-sort'
import globals from 'globals'

const commonRules = {
  ...react.configs.recommended.rules,
  ...react.configs['jsx-runtime'].rules,
  ...reactHooks.configs.recommended.rules,
  ...sort.configs.recommended.rules,
  'import/extensions': [
    'error',
    'ignorePackages',
    { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
  ],
  'import/no-unresolved': 'error',
  'no-console': ['error', { allow: ['error'] }],
  'no-dupe-args': 'error',
  'no-duplicate-imports': 'error',
  'no-else-return': 'error',
  'no-empty': ['error', { allowEmptyCatch: true }],
  'no-extra-bind': 'error',
  'no-param-reassign': 'error',
  'no-return-await': 'error',
  'no-template-curly-in-string': 'error',
  'no-unneeded-ternary': 'error',
  'no-unused-vars': 'off',
  'no-var': 'error',
  'object-shorthand': 'error',
  'prefer-const': ['error', { destructuring: 'all' }],
  'prettier/prettier': 'error',
  'react/jsx-max-props-per-line': [1, { when: 'multiline' }],
  'react/jsx-sort-props': ['error', { reservedFirst: true }],
  'react/no-unescaped-entities': 'off',
  'react/no-unknown-property': ['error', { ignore: ['css'] }],
  'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  'require-await': 'error',
  'sort/object-properties': ['error', { caseSensitive: true }],
  'sort/string-enums': ['error'],
  'sort/string-unions': ['error'],
  'sort/type-properties': ['error'],
}

export default [
  js.configs.recommended,
  sort.configs['flat/recommended'],
  prettier,
  { ignores: ['dist', '.yarn', 'eslint.config.js'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        React: 'writable',
      },
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
      ...commonRules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
        },
      ],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
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

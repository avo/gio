import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  const config = {
    base: '/',
    plugins: [react({ jsxImportSource: '@emotion/react' }), mdx()],
  };

  if (command !== 'serve') {
    config.base = 'https://annavo.dev';
  }

  return config;
});

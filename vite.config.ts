import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react({ jsxImportSource: '@emotion/react' })],
// });

export default defineConfig(({ command }) => {
  const config = {
    base: '/',
    plugins: [react({ jsxImportSource: '@emotion/react' })],
  };

  if (command !== 'serve') {
    config.base = '/gio/';
  }

  return config;
});

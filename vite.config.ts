import { createLogger, defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import UnoCSS from 'unocss/vite';
import { createMpaPlugin } from 'vite-plugin-virtual-mpa';
import { fileURLToPath, URL } from 'node:url';
import type { Logger } from 'vite';

const customLogger = (): Logger => {
  const logger = createLogger();
  return {
    ...logger,
    warn: (message, options) => {
      const regexp = new RegExp('files in the public directory are served at the root path.', 'g');
      if (regexp.test(message)) return;
      logger.info(message, options);
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  customLogger: customLogger(),
  plugins: [
    react(),
    UnoCSS(),
    createMpaPlugin({
      verbose: false,
      template: 'public/index.html',
      pages: [{ name: 'index', filename: 'index.html' }],
      rewrites: [{ from: /^(?!.*charting_library).*$/i, to: '/public/index.html' }],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    transformer: 'lightningcss',
  },
});

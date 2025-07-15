import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://127.0.0.1:5000',
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [react({ jsxRuntime: 'classic' }), dts({ insertTypesEntry: true })],
  resolve: {
    alias: {
      '@': resolve(__dirname, '.'),
      '@/styled-system': resolve(__dirname, 'styled-system')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'InvenioBulkImporter',
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    // This will inline CSS into your JS bundle
    cssCodeSplit: false
  }
});

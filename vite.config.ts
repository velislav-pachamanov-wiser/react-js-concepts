import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    forwardConsole: {
      unhandledErrors: true,
      logLevels: ['error', 'warn', 'info', 'debug', 'trace'],
    },
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    alias: {
      '@consts': path.resolve(__dirname, 'src/consts'),
      src: path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  build: {
    sourcemap: true,
  }
})

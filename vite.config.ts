import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [, nodePolyfills({
    include: ['buffer', 'process', 'stream'],
    globals: {
      Buffer: true, // can also be 'build', 'dev', or false
      process: true,
    },
  }), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  preview: {
    port: 3000,
    host: true,
  },
})

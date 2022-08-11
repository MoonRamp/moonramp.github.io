import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  ssr: {
    noExternal: ["solid-bootstrap"]
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});

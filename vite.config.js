import { defineConfig } from 'vite';

// Compile JSX with the automatic runtime so components don't need `import React`.
export default defineConfig({
  esbuild: { jsx: 'automatic' },
});

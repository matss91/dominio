
// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true, // para usar describe/it sin importar
    environment: 'node', // o 'jsdom' para proyectos web
    include: ['*/**/*.test.ts'], // o donde estén tus tests
  },
})
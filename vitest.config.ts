/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,          // Puedes usar describe, test, expect sin importar
    environment: 'jsdom',   // Emula el DOM si estás probando frontend
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['node_modules/', 'dist/', 'coverage/']
    },
    setupFiles: './vitest.setup.ts' // Archivo para configuración global opcional
  }
})
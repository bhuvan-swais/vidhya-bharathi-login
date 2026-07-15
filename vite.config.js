import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Plain Vite + React. No Tailwind/shadcn — styling lives in src/index.css
// as semantic design tokens so components stay free of hardcoded colors.
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/in_sem_ci-cd-frontend/',
  plugins: [react()],
})

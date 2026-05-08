import { defineConfig } from 'vite'
import react from '@vitejs/react-web'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/GiteAubergeZahiBouiblane/', // هذا هو اسم المستودع الخاص بك على GitHub
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
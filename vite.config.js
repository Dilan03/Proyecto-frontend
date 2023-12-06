import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  css: {
    modules: true, // Si estás utilizando módulos CSS
    preprocessorOptions: {
      // Opciones del preprocesador si estás utilizando uno (por ejemplo, Sass o Less)
    },
  },
})



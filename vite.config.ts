import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base: ./' garante que os arquivos CSS/JS sejam linkados com caminho relativo
  // Isso evita erros se o site rodar em uma subpasta ou se o servidor tratar caminhos de forma diferente
  base: './', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    emptyOutDir: true
  }
});
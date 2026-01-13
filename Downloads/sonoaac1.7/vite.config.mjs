import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',            // Ensures assets load correctly on Vercel
  build: {
    outDir: 'dist',      // Output folder for Vercel
    assetsDir: 'assets', // Keeps JS/CSS organized
  },
});
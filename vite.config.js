import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: process.env.VITE_PORT || 3000,
    host: process.env.VITE_HOST || 'localhost',
    allowedHosts: ['danibanez.publicvm.com']
  },
  preview: {
    port: process.env.VITE_PORT || 3000,
    host: process.env.VITE_HOST || '0.0.0.0',
    allowedHosts: ['danibanez.publicvm.com']
  }
});

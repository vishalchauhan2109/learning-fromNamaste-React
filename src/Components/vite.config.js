import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'; // if you're using Tailwind plugin

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
});

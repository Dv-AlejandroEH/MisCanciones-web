import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Cambia este dominio por el real (o define SITE_URL en tu entorno de build).
// Se usa para canonical, Open Graph, JSON-LD, robots.txt y sitemap.
const site = process.env.SITE_URL || 'https://miscanciones.app';

export default defineConfig({
  site,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

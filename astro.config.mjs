import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// En desarrollo se sirve desde http://localhost:4321/.
// En build, GitHub Pages publica bajo /MisCanciones-web/ (o el path de SITE_URL).
const isDev = process.argv.includes('dev');
const site = isDev
  ? 'http://localhost:4321/'
  : process.env.SITE_URL || 'https://dv-alejandroeh.github.io/MisCanciones-web/';
const base = isDev ? '/' : new URL(site).pathname.replace(/\/$/, '') || '/';
const canonicalSitemapUrl = new URL(base.endsWith('/') ? base : `${base}/`, site)
  .toString()
  .replace(/\/$/, '');

export default defineConfig({
  site,
  base,
  integrations: [
    sitemap({
      filter: (url) => url !== canonicalSitemapUrl,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

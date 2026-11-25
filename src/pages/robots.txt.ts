import type { APIRoute } from 'astro';
import { withBase } from '../utils/assets';

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://dv-alejandroeh.github.io/MisCanciones-web/');
  const sitemap = new URL(withBase('sitemap-index.xml'), origin).toString();

  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
};

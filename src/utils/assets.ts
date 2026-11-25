// Prefija los recursos públicos con el base de Astro (necesario en GitHub Pages).
// SITE_URL puede apuntar a un dominio propio; BASE_URL se calcula desde ahí.
const rawBase = import.meta.env.BASE_URL || '/';
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

export const withBase = (path: string): string => {
  if (/^https?:\/\//.test(path) || path.startsWith(base)) return path;
  return `${base}${path.replace(/^\/+/, '')}`;
};

// Los enlaces de la app pueden ser locales (con base) o una URL directa externa.
export const appHref = (url: string): string =>
  /^https?:\/\//.test(url) ? url : withBase(url);

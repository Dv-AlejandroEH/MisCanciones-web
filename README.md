# Mis Canciones — Landing page

Landing page de descarga para **Mis Canciones**, construida con Astro 7 + Tailwind CSS 4. Diseño oscuro responsive, SEO completo (Open Graph, Twitter Cards, JSON-LD `SoftwareApplication`), sitemap y `robots.txt`.

## Desarrollo

```bash
npm install
npm run dev
```

El servidor queda disponible en http://localhost:4321.

## Comandos

| Comando        | Descripción                                  |
| -------------- | -------------------------------------------- |
| `npm run dev`  | Servidor de desarrollo                        |
| `npm run build` | Genera el sitio estático en `dist/`          |
| `npm run preview` | Sirve la build local para verificarla      |
| `npm run check` | Comprobación de tipos de Astro              |

## Configuración antes de publicar

1. **Dominio:** por defecto se usa `https://miscanciones.app` como dominio de ejemplo. Cámbialo en `astro.config.mjs` o define la variable de entorno `SITE_URL` durante el build. El valor se aplica a canonical, Open Graph, JSON-LD, sitemap y `robots.txt` (este último requiere editarlo a mano por ser un archivo estático en `public/`).
2. **Enlaces de descarga:** los botones de `src/pages/index.astro` apuntan a `#` de forma provisional. Sustitúyelos por los instaladores reales de Android, Windows y macOS.
3. **Imagen social:** `public/og-image.png` (1200×630) está lista para compartir; reemplázala si cambias el branding.
4. **Legal:** los enlaces del footer son anclas provisionales; crea las páginas de privacidad y términos cuando las tengas.

## Estructura

```
astro.config.mjs          # Integración de sitemap + plugin de Tailwind
src/layouts/BaseLayout.astro  # <head> con meta etiquetas y JSON-LD
src/pages/index.astro     # Landing completa
src/styles/global.css     # Tema Tailwind y estilos base
public/robots.txt
public/og-image.png
public/favicon.svg
```

# Mis Canciones — Landing page

Landing de alta impacto visual para **Mis Canciones**, construida con **Astro 7 + Tailwind CSS 4**. La spec original pedía React/Next.js + Framer Motion; se implementa con el stack que ya tiene el proyecto (Astro publica HTML estático y mantiene `http://localhost:4321`) usando animaciones CSS y un único script con `requestAnimationFrame`, sin dependencias extra.

La landing usa el logo real, los colores de la app Flutter, la versión `1.0.0`, carátulas reales de los charts y descarga directa del APK. El repositorio de la app es privado: **no se publica ningún enlace al código fuente ni a GitHub Releases**.

## Estructura

```text
src/
├── components/
│   ├── Navbar.astro          # Navbar sticky, menú móvil y selector ES/EN
│   ├── Dock.astro            # Cápsula flotante inferior tras el hero
│   ├── Hero.astro            # Hero oscuro + showcase de 3 móviles
│   ├── BentoGrid.astro       # Bento asimétrico de 7 tarjetas
│   ├── Scrollytelling.astro  # Sección fija: fuentes → una sola app
│   ├── InteractiveDemo.astro # Demo clicable en modo claro
│   ├── Community.astro       # Contador 100% + comunidad
│   ├── Footer.astro          # Footer de 5 columnas
│   └── PhoneFrame.astro      # Marco de móvil reutilizable
├── data/app.ts               # Datos espejo de la app Flutter
├── layouts/BaseLayout.astro  # <head>, estilos globales y todo el JS de interacción
├── pages/
│   ├── index.astro           # Composición de la página
│   └── robots.txt.ts         # robots.txt con la URL pública del sitemap
├── utils/assets.ts           # Resolución de rutas con el base de Astro
└── styles/global.css         # Tokens, componentes y animaciones
```

Para cambiar una captura de pantalla, edita el contenido dentro de un `PhoneFrame.astro`; el marco y sus sombras se reutilizan en todo el sitio.

## Sincronización con la app

Los valores compartidos viven en `src/data/app.ts`:

| Campo | Fuente en la app Flutter |
| --- | --- |
| `name`, `version`, `description` | `pubspec.yaml` |
| `webUrl` | `.github/workflows/deploy-pages.yml` / README de la app |
| `apkUrl` | Tu APK: `public/downloads/MisCanciones.apk` o una URL directa propia |
| `tagline`, `valueProposition`, `proof` | Textos de marketing de la landing |
| `community` | Enlaces a Discord/Telegram/Roadmap; vacíos = «próximamente» |

Los colores están en `src/styles/global.css` y replican `lib/core/constants/app_colors.dart`. No se inventaron cifras de usuarios: la prueba social y el contador usan el dato verificable de que la app es gratuita.

## Publicar el APK

Copia el instalador a `public/downloads/MisCanciones.apk`. Todos los botones apuntan ahí y fuerzan la descarga con el nombre `MisCanciones.apk`. Si lo alojas en otro sitio, cambia `apkUrl` en `src/data/app.ts` por esa URL directa; no hace falta pasar por GitHub Releases.

## Animaciones e interacciones

El `<script>` de `src/layouts/BaseLayout.astro` calcula el estado visual en cada frame a partir del scroll y escribe variables CSS:

- **Navbar y dock**: la navbar se vuelve más opaca al desplazarse; el dock inferior aparece al abandonar el hero.
- **Hero**: resplandor radial, tres móviles inclinados y desvanecimiento progresivo del texto.
- **Bento**: revelado al entrar en pantalla, hover con elevación y burbujas flotantes.
- **Scrollytelling** (`[data-story]`, 480vh): crossfade entre «Tu música vive en mil sitios» y «¿Por qué no juntarlas?», seis tarjetas que vuelan al teléfono con estela, y cierre con el móvil a la izquierda y el texto a la derecha.
- **Demo interactiva** (`[data-demo]`): pasos `01/02/03` clicables con recorrido automático al entrar en pantalla; el móvil cambia de contenido y muestra un toast «Cambio aplicado».
- **Contador** (`[data-counter]`): anima de 0 a 100% al entrar en pantalla.
- **Selector ES/EN**: intercambia las etiquetas cortas que tengan `data-en`.
- **Barra superior**: progreso global de la página.

Con `prefers-reduced-motion` las animaciones se detienen y todo se muestra en su estado final.

## Desarrollo

```bash
npm install
npm run dev
```

El servidor queda disponible en http://localhost:4321. En producción las rutas se generan con el base `/MisCanciones-web/`, porque GitHub Pages publica el sitio en un subpath.

## Despliegue en GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica el sitio en cada push a `main`. Antes del primer deploy hay que entrar en **Settings → Pages → Build and deployment** y elegir **GitHub Actions** como fuente.

Con el repo privado, GitHub Pages gratis no publica; hay que hacer público **este repo de la web** (el de la app Flutter sigue siendo privado y no se enlaza desde la landing). Si tienes un dominio propio, crea la variable de repo `SITE_URL` con la URL definitiva y añade el archivo `public/CNAME`; el canonical, el sitemap y `robots.txt` se regeneran desde esa variable.

## Indexación en Google

Tras el primer deploy, verifica estas URLs:

- `https://dv-alejandroeh.github.io/MisCanciones-web/robots.txt`
- `https://dv-alejandroeh.github.io/MisCanciones-web/sitemap-index.xml`

Después añade el sitio en [Google Search Console](https://search.google.com/search-console) (propiedad de dominio o de prefijo de URL) y envía el sitemap desde **Sitemaps**. La landing ya incluye canonical, Open Graph, JSON-LD de `SoftwareApplication`, `lang="es"` y meta `robots: index, follow`.

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Genera el sitio estático en `dist/` |
| `npm run preview` | Sirve la build local para verificarla |
| `npm run check` | Comprobación de tipos de Astro |

## Recursos

- `public/logo.png`: copia de `assets/brand/logo.png` de la app.
- `public/favicon.png` y `public/apple-touch-icon.png`: iconos derivados del logo.
- `public/og-image.png`: imagen social con el mismo tema que la app.
- `public/art/*.webp`: carátulas optimizadas desde `assets/charts/` de la app.

Antes de publicar, revisa el dominio en `astro.config.mjs` (o define `SITE_URL`) y cambia los enlaces de `src/data/app.ts` si las URLs definitivas son otras.

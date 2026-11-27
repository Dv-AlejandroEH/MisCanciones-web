# Mis Canciones — Landing page

Landing de alta impacto visual para **Mis Canciones**, construida con **Astro 7 + Tailwind CSS 4**. La spec original pedía React/Next.js + Framer Motion; se implementa con el stack que ya tiene el proyecto (Astro publica HTML estático y mantiene `http://localhost:4321`) usando animaciones CSS y un único script con `requestAnimationFrame`, sin dependencias extra.

La landing usa el logo real, los colores de la app Flutter, la versión `1.0.0`, carátulas reales de los charts y una sección de descargas con APK, AppImage, `.deb`, `.rpm`, Snap y tarballs. El repositorio de la app es privado y **no se publica ningún enlace a su código fuente**; los binarios se publican en un release espejo de este repo web para que cualquiera pueda descargarlos.

## Estructura

```text
assets/                       # Logos SVG de plataformas para las descargas
src/
├── components/
│   ├── Navbar.astro          # Navbar sticky, menú móvil y selector ES/EN
│   ├── Dock.astro            # Cápsula flotante inferior tras el hero
│   ├── Hero.astro            # Hero oscuro + showcase de 3 móviles
│   ├── Downloads.astro       # Descargas por plataforma + comandos copiables
│   ├── BentoGrid.astro       # Bento asimétrico de 7 tarjetas
│   ├── Scrollytelling.astro  # Sección fija: fuentes → una sola app
│   ├── InteractiveDemo.astro # Demo clicable en modo claro
│   ├── Community.astro       # Contador 100% + comunidad
│   ├── Footer.astro          # Footer de 5 columnas
│   └── PhoneFrame.astro      # Marco de móvil reutilizable
├── data/app.ts               # Datos espejo de la app Flutter
├── data/downloads.ts         # Catálogo de assets y recomendaciones
├── layouts/BaseLayout.astro  # <head>, estilos globales y todo el JS de interacción
├── pages/
│   ├── index.astro           # Composición de la página
│   └── robots.txt.ts         # robots.txt con la URL pública del sitemap
├── utils/assets.ts           # Resolución de rutas con el base de Astro
├── utils/platform.ts         # Detección de sistema y distro
└── styles/global.css         # Tokens, componentes y animaciones
```

Para cambiar una captura de pantalla, edita el contenido dentro de un `PhoneFrame.astro`; el marco y sus sombras se reutilizan en todo el sitio.

## Sincronización con la app

Los valores compartidos viven en `src/data/app.ts`:

| Campo | Fuente en la app Flutter |
| --- | --- |
| `name`, `version`, `description` | `pubspec.yaml` |
| `webUrl` | `.github/workflows/deploy-pages.yml` / README de la app |
| `downloads`, `apkUrl` | Release espejo `v1.0.0` de este repo (APK y paquetes Linux) |
| `tagline`, `valueProposition`, `proof` | Textos de marketing de la landing |
| `community` | Enlaces a Discord/Telegram/Roadmap; vacíos = «próximamente» |

Los colores están en `src/styles/global.css` y replican `lib/core/constants/app_colors.dart`. No se inventaron cifras de usuarios: la prueba social y el contador usan el dato verificable de que la app es gratuita.

## Publicar las descargas

Los archivos se suben a dos releases con el mismo tag `v1.0.0`:

1. `Dv-AlejandroEH/MisCanciones` (privado): release original de la app.
2. `Dv-AlejandroEH/MisCanciones-web` (público): espejo con los mismos assets; es el que enlaza la landing.

En `src/data/downloads.ts` están centralizados `downloads.files`, `downloads.releaseUrl`, `downloads.checksumUrl` y el catálogo `downloadOptions` con etiquetas, tamaños y comandos. `src/utils/platform.ts` decide qué opción recomendar según el sistema. Si cambia la versión, actualiza ahí el tag y los nombres de archivo: los CTAs de hero, navbar, dock y la sección `#descargas` se alimentan de ese único catálogo. `public/downloads/` queda reservado por si algún día se decide servir los binarios desde el propio Pages.

## Animaciones e interacciones

El `<script>` de `src/layouts/BaseLayout.astro` calcula el estado visual en cada frame a partir del scroll y escribe variables CSS:

- **Navbar y dock**: la navbar se vuelve más opaca al desplazarse; el dock inferior aparece al abandonar el hero.
- **Hero**: resplandor radial, tres móviles inclinados y desvanecimiento progresivo del texto.
- **Bento**: revelado al entrar en pantalla, hover con elevación y burbujas flotantes.
- **Scrollytelling** (`[data-story]`, 480vh): crossfade entre «Tu música vive en mil sitios» y «¿Por qué no juntarlas?», seis tarjetas que vuelan al teléfono con estela, y cierre con el móvil a la izquierda y el texto a la derecha.
- **Descargas** (`[data-downloads]`): detecta Android, distro Linux (Ubuntu/Debian → `.deb`, Fedora/RHEL → `.rpm`, resto → AppImage) o sin build nativo (Web), y aplica esa recomendación a hero, navbar, dock y footer. En Linux hay chips para corregir la distro manualmente; los comandos de instalación se copian al portapapeles y la elección se recuerda durante la sesión.
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

Con el repo privado, GitHub Pages gratis no publica; hay que hacer público **este repo de la web** (el de la app Flutter sigue siendo privado y solo se enlazan sus binarios desde el release espejo público). Si tienes un dominio propio, crea la variable de repo `SITE_URL` con la URL definitiva y añade el archivo `public/CNAME`; el canonical, el sitemap y `robots.txt` se regeneran desde esa variable.

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
- `assets/*.svg`: logos usados en descargas. `ubuntu.svg` representa también a Debian (`.deb`) y `fedora.svg` a RHEL (`.rpm`); `targz.svg` cubre portable y paquete completo. Se importan como URL desde `src/components/Downloads.astro` para evitar duplicar IDs internos.

Antes de publicar, revisa el dominio en `astro.config.mjs` (o define `SITE_URL`) y cambia los enlaces de `src/data/app.ts` si las URLs definitivas son otras.

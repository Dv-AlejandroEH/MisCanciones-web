// Datos espejo del proyecto Flutter (../MisCanciones).
// Los binarios viven en el release público de este repo web (espejo del release
// del repo privado de la app), para que cualquier visitante pueda descargarlos.
// Cuando cambies algo aquí, mantenlo alineado con:
//   - pubspec.yaml  -> name, version, description
//   - lib/core/constants/app_colors.dart -> colores (en global.css)
const releaseBase =
  'https://github.com/Dv-AlejandroEH/MisCanciones-web/releases/download/v1.0.0/';

export const downloads = {
  version: '1.0.0',
  tag: 'v1.0.0',
  releaseUrl: 'https://github.com/Dv-AlejandroEH/MisCanciones-web/releases/tag/v1.0.0',
  checksumUrl: `${releaseBase}SHA256SUMS.txt`,
  files: {
    android: `${releaseBase}MisCanciones-1.0.0-android.apk`,
    appimage: `${releaseBase}MisCanciones-1.0.0-linux-x86_64.AppImage`,
    deb: `${releaseBase}MisCanciones-1.0.0-linux-amd64.deb`,
    rpm: `${releaseBase}MisCanciones-1.0.0-linux-x86_64.rpm`,
    snap: `${releaseBase}MisCanciones-1.0.0-linux-amd64.snap`,
    portable: `${releaseBase}MisCanciones-1.0.0-linux-portable.tar.gz`,
    all: `${releaseBase}MisCanciones-1.0.0-linux-all.tar.gz`,
  },
} as const;

export const app = {
  name: 'Mis Canciones',
  version: downloads.version,
  description:
    'Aplicación de música con búsqueda, álbumes, playlists y reproducción.',
  tagline: 'Tu música, gratis y a tu manera',
  valueProposition:
    'Busca, organiza y escucha tu música sin pagar ni suscribirte.',
  webUrl: 'https://dv-alejandroeh.github.io/MisCanciones/',
  apkUrl: downloads.files.android,
  platforms: ['Web', 'Android', 'Linux'],
  // Prueba social verificable: no inventamos cifras de usuarios.
  proof: '100% gratis · sin suscripción',
  // Enlaces de comunidad. Déjalos vacíos para mostrar «Próximamente».
  community: {
    discord: 'https://discord.gg/SHzgrYnshb',
    telegram: '',
    roadmap: '',
    support: '',
  },
} as const;

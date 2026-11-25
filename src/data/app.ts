// Datos espejo del proyecto Flutter (../MisCanciones).
// El repositorio de la app es privado: sus enlaces NO se publican en la web.
// Cuando cambies algo aquí, mantenlo alineado con:
//   - pubspec.yaml  -> name, version, description
//   - lib/core/constants/app_colors.dart -> colores (en global.css)
export const app = {
  name: 'Mis Canciones',
  version: '1.0.0',
  description:
    'Aplicación de música con búsqueda, álbumes, playlists y reproducción.',
  tagline: 'Tu música, gratis y a tu manera',
  valueProposition:
    'Busca, organiza y escucha tu música sin pagar ni suscribirte.',
  webUrl: 'https://dv-alejandroeh.github.io/MisCanciones/',
  // Coloca el APK en public/downloads/MisCanciones.apk o cambia esto por tu URL directa.
  apkUrl: '/downloads/MisCanciones.apk',
  platforms: ['Web', 'Android'],
  // Prueba social verificable: no inventamos cifras de usuarios.
  proof: '100% gratis · sin suscripción',
  // Enlaces de comunidad. Déjalos vacíos para mostrar «Próximamente».
  community: {
    discord: '',
    telegram: '',
    roadmap: '',
    support: '',
  },
} as const;

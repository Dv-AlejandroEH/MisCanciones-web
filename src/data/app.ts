// Datos espejo del proyecto Flutter (../MisCanciones).
// Los binarios viven en el release público de este repo web (espejo del release
// del repo privado de la app), para que cualquier visitante pueda descargarlos.
// Cuando cambies algo aquí, mantenlo alineado con:
//   - pubspec.yaml  -> name, version, description
//   - lib/core/constants/app_colors.dart -> colores (en global.css)
import { downloads } from './downloads';

export { downloads } from './downloads';

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

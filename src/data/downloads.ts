const releaseBase =
  'https://github.com/Dv-AlejandroEH/MisCanciones-web/releases/download/v1.0.0/';

export type DownloadId =
  | 'android'
  | 'appimage'
  | 'deb'
  | 'rpm'
  | 'snap'
  | 'portable'
  | 'all'
  | 'web';

export interface DownloadOption {
  id: DownloadId;
  group: 'mobile' | 'linux' | 'web';
  icon: string;
  titleEs: string;
  titleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  labelEs: string;
  labelEn: string;
  detailEs: string;
  detailEn: string;
  chipEs: string;
  chipEn: string;
  format: string;
  size: string;
  file: string;
  href: string;
  command?: string;
  featureTitleEs?: string;
  featureTitleEn?: string;
  featureTextEs?: string;
  featureTextEn?: string;
  external?: boolean;
}

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

export const downloadOptions: DownloadOption[] = [
  {
    id: 'android',
    group: 'mobile',
    icon: 'android',
    titleEs: 'Android',
    titleEn: 'Android',
    descriptionEs: 'APK para móviles y tablets.',
    descriptionEn: 'APK for phones and tablets.',
    labelEs: 'Descargar APK',
    labelEn: 'Download APK',
    detailEs: 'Android · directo',
    detailEn: 'Android · direct',
    chipEs: 'Android',
    chipEn: 'Android',
    format: 'APK',
    size: '138 MB',
    file: 'MisCanciones-1.0.0-android.apk',
    href: downloads.files.android,
  },
  {
    id: 'deb',
    group: 'linux',
    icon: 'deb',
    titleEs: 'Ubuntu / Debian',
    titleEn: 'Ubuntu / Debian',
    descriptionEs: 'Instalador nativo para apt.',
    descriptionEn: 'Native installer for apt.',
    labelEs: 'Descargar para Ubuntu/Debian',
    labelEn: 'Download for Ubuntu/Debian',
    detailEs: 'Paquete .deb · 77 MB',
    detailEn: '.deb package · 77 MB',
    chipEs: 'Ubuntu / Debian',
    chipEn: 'Ubuntu / Debian',
    format: '.deb',
    size: '77 MB',
    file: 'MisCanciones-1.0.0-linux-amd64.deb',
    href: downloads.files.deb,
    command: 'sudo apt install ./MisCanciones-1.0.0-linux-amd64.deb',
    featureTitleEs: 'Instalador nativo para Ubuntu y Debian',
    featureTitleEn: 'Native installer for Ubuntu and Debian',
    featureTextEs: 'Abre el .deb o instálalo con apt. Ideal si quieres que aparezca en tu menú de aplicaciones.',
    featureTextEn: 'Open the .deb or install it with apt. Ideal if you want it in your application menu.',
  },
  {
    id: 'rpm',
    group: 'linux',
    icon: 'rpm',
    titleEs: 'Fedora / RHEL',
    titleEn: 'Fedora / RHEL',
    descriptionEs: 'Paquete para dnf y RPM.',
    descriptionEn: 'Package for dnf and RPM.',
    labelEs: 'Descargar para Fedora/RHEL',
    labelEn: 'Download for Fedora/RHEL',
    detailEs: 'Paquete .rpm · 77 MB',
    detailEn: '.rpm package · 77 MB',
    chipEs: 'Fedora / RHEL',
    chipEn: 'Fedora / RHEL',
    format: '.rpm',
    size: '77 MB',
    file: 'MisCanciones-1.0.0-linux-x86_64.rpm',
    href: downloads.files.rpm,
    command: 'sudo dnf install ./MisCanciones-1.0.0-linux-x86_64.rpm',
    featureTitleEs: 'Paquete RPM para Fedora y RHEL',
    featureTitleEn: 'RPM package for Fedora and RHEL',
    featureTextEs: 'Instálalo con dnf para integrarlo en tu escritorio y recibir actualizaciones del sistema.',
    featureTextEn: 'Install it with dnf to integrate it into your desktop and system updates.',
  },
  {
    id: 'snap',
    group: 'linux',
    icon: 'snap',
    titleEs: 'Snap',
    titleEn: 'Snap',
    descriptionEs: 'Instalación aislada con Snap.',
    descriptionEn: 'Sandboxed install with Snap.',
    labelEs: 'Descargar Snap',
    labelEn: 'Download Snap',
    detailEs: 'Snap · 78 MB',
    detailEn: 'Snap · 78 MB',
    chipEs: 'Snap',
    chipEn: 'Snap',
    format: '.snap',
    size: '78 MB',
    file: 'MisCanciones-1.0.0-linux-amd64.snap',
    href: downloads.files.snap,
    command: 'sudo snap install ./MisCanciones-1.0.0-linux-amd64.snap --dangerous',
    featureTitleEs: 'Snap para cualquier distro con snapd',
    featureTitleEn: 'Snap for any distro with snapd',
    featureTextEs: 'Una instalación aislada y fácil de desinstalar, siempre que tu distro tenga snapd.',
    featureTextEn: 'A sandboxed install that is easy to remove, as long as your distro has snapd.',
  },
  {
    id: 'appimage',
    group: 'linux',
    icon: 'appimage',
    titleEs: 'AppImage universal',
    titleEn: 'Universal AppImage',
    descriptionEs: 'Un archivo para casi cualquier Linux.',
    descriptionEn: 'One file for almost any Linux.',
    labelEs: 'Descargar AppImage',
    labelEn: 'Download AppImage',
    detailEs: 'Linux universal · 80 MB',
    detailEn: 'Universal Linux · 80 MB',
    chipEs: 'Otra distro',
    chipEn: 'Other distro',
    format: 'AppImage',
    size: '80 MB',
    file: 'MisCanciones-1.0.0-linux-x86_64.AppImage',
    href: downloads.files.appimage,
    command: 'chmod +x MisCanciones-1.0.0-linux-x86_64.AppImage && ./MisCanciones-1.0.0-linux-x86_64.AppImage --appimage-extract-and-run',
    featureTitleEs: 'AppImage: un archivo, cualquier distro',
    featureTitleEn: 'AppImage: one file, any distro',
    featureTextEs: 'Sin permisos de root y sin necesidad de libfuse2: extrae y ejecuta. ¿Prefieres un paquete nativo? Elige tu distro arriba.',
    featureTextEn: 'No root permissions and no libfuse2 needed: extract and run. Prefer a native package? Pick your distro above.',
  },
  {
    id: 'portable',
    group: 'linux',
    icon: 'archive',
    titleEs: 'Portable',
    titleEn: 'Portable',
    descriptionEs: 'Sin instalar: extrae y abre.',
    descriptionEn: 'No install: extract and open.',
    labelEs: 'Descargar portable',
    labelEn: 'Download portable',
    detailEs: 'Linux portable · 80 MB',
    detailEn: 'Portable Linux · 80 MB',
    chipEs: 'Portable',
    chipEn: 'Portable',
    format: '.tar.gz',
    size: '80 MB',
    file: 'MisCanciones-1.0.0-linux-portable.tar.gz',
    href: downloads.files.portable,
    command: 'tar -xzf MisCanciones-1.0.0-linux-portable.tar.gz && cd miscanciones-1.0.0-portable && ./install.sh',
    featureTitleEs: 'Linux portable, sin instalar',
    featureTitleEn: 'Portable Linux, no install needed',
    featureTextEs: 'Extrae el archivo y abre la app desde la carpeta. Perfecto para probarla sin tocar el sistema.',
    featureTextEn: 'Extract the archive and open the app from the folder. Perfect for trying it without touching the system.',
  },
  {
    id: 'all',
    group: 'linux',
    icon: 'bundle',
    titleEs: 'Paquete completo',
    titleEn: 'Full bundle',
    descriptionEs: 'Todos los formatos Linux + SHA256SUMS.',
    descriptionEn: 'Every Linux format + SHA256SUMS.',
    labelEs: 'Descargar paquete completo',
    labelEn: 'Download full bundle',
    detailEs: 'Todos los formatos · 390 MB',
    detailEn: 'All formats · 390 MB',
    chipEs: 'Todos',
    chipEn: 'All',
    format: '.tar.gz',
    size: '390 MB',
    file: 'MisCanciones-1.0.0-linux-all.tar.gz',
    href: downloads.files.all,
    command: 'tar -xzf MisCanciones-1.0.0-linux-all.tar.gz',
    featureTitleEs: 'Todos los formatos Linux en un solo archivo',
    featureTitleEn: 'Every Linux format in one file',
    featureTextEs: 'Incluye AppImage, .deb, .rpm, Snap, versión portable y sus checksums.',
    featureTextEn: 'Includes AppImage, .deb, .rpm, Snap, the portable version and their checksums.',
  },
  {
    id: 'web',
    group: 'web',
    icon: 'web',
    titleEs: 'App web',
    titleEn: 'Web app',
    descriptionEs: 'Sin instalar, siempre actualizada.',
    descriptionEn: 'No install, always up to date.',
    labelEs: 'Abrir app web',
    labelEn: 'Open web app',
    detailEs: 'Navegador · sin instalar',
    detailEn: 'Browser · no install',
    chipEs: 'Web',
    chipEn: 'Web',
    format: 'Web',
    size: '—',
    file: '',
    href: 'https://dv-alejandroeh.github.io/MisCanciones/',
    featureTitleEs: 'Abre Mis Canciones en el navegador',
    featureTitleEn: 'Open Mis Canciones in your browser',
    featureTextEs: 'La app completa, siempre actualizada. Entra, busca tu música y mantén tus playlists sincronizadas.',
    featureTextEn: 'The full app, always up to date. Sign in, search your music and keep your playlists in sync.',
    external: true,
  },
];

export const findDownload = (id: string): DownloadOption =>
  downloadOptions.find((option) => option.id === id) ?? downloadOptions[0];

import type { DownloadId } from '../data/downloads';

export type PlatformOS = 'android' | 'linux' | 'macos' | 'windows' | 'other';

export interface PlatformInfo {
  os: PlatformOS;
  distro: string | null;
  recommendation: DownloadId;
}

// El navegador no expone la distro de forma fiable (Chrome en Ubuntu suele
// decir solo "Linux"). Usamos lo que viene en el UA y, si no basta, la web
// ofrece chips manuales para elegir el paquete correcto.
export function detectEnvironment(userAgent: string, platformHint = ''): PlatformInfo {
  const raw = `${platformHint} ${userAgent}`;

  if (/android/i.test(raw)) {
    return { os: 'android', distro: null, recommendation: 'android' };
  }

  // El UA explícito manda sobre Client Hints: en navegadores headless o con
  // UA falso, platform puede decir "Linux" aunque el UA diga Windows/macOS.
  if (/windows|win32|win64/i.test(userAgent) || /windows/i.test(platformHint)) {
    return { os: 'windows', distro: null, recommendation: 'web' };
  }

  if (/iphone|ipad|ipod|macintosh|mac os x/i.test(userAgent) || /mac/i.test(platformHint)) {
    return { os: 'macos', distro: null, recommendation: 'web' };
  }

  if (/linux|x11|ubuntu|debian|fedora|rhel|centos|rocky|alma/i.test(raw)) {
    if (/fedora/i.test(raw)) {
      return { os: 'linux', distro: 'Fedora', recommendation: 'rpm' };
    }
    if (/rhel|redhat|centos|rocky|alma/i.test(raw)) {
      return { os: 'linux', distro: 'RHEL', recommendation: 'rpm' };
    }
    if (/ubuntu/i.test(raw)) {
      return { os: 'linux', distro: 'Ubuntu', recommendation: 'deb' };
    }
    if (/debian/i.test(raw)) {
      return { os: 'linux', distro: 'Debian', recommendation: 'deb' };
    }
    return { os: 'linux', distro: null, recommendation: 'appimage' };
  }

  return { os: 'other', distro: null, recommendation: 'web' };
}

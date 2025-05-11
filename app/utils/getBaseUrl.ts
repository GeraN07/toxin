export function getBaseUrl() {
  const isBrowser = typeof window !== 'undefined';
  const isDev = process.env.NODE_ENV === 'development';
  const isBuildTime = !isBrowser && process.env.NEXT_RUNTIME === 'nodejs';

  if (isBrowser) {
    return '';
  }

  if (isDev && !isBuildTime) {
    return '';
  }

  if (process.env.BASE_API_URL) {
    return process.env.BASE_API_URL;
  }

  const host = process.env.VERCEL_URL || process.env.HOST || 'localhost:3000';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  return `${protocol}://${host}`;
}

import { headers } from 'next/headers';

export const getBaseUrl = async (): Promise<string> => {
  const headersList = await headers();
  const host = headersList.get('host') ?? '';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  return `${protocol}://${host}`;
};

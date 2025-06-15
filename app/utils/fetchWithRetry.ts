export const fetchWithRetry = async <T>(
  url: string,
  retries = 3,
  timeoutMs = 5000
): Promise<T | undefined> => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Next.js server)',
        },
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return (await response.json()) as T;
    } catch (error) {
      clearTimeout(timeout);

      if (attempt === retries) {
        return undefined;
      }

      await new Promise((res) => setTimeout(res, 500));
    }
  }

  return undefined;
};

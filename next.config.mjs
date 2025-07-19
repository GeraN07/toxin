import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  env: {
    BASE_API_URL: process.env.BASE_API_URL,
  },
});

export default nextConfig;

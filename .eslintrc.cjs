/* eslint-env node */

module.exports = {
  env: { browser: true, es2022: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "htmlacademy/react-typescript",
    "next", // Убираем plugin:react-hooks/recommended, так как Next.js уже включает его
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: 'tsconfig.json' },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off"
  },
  overrides: [
    {
      files: ['*test*'],
      rules: { '@typescript-eslint/unbound-method': 'off' }
    },
  ],
  ignorePatterns: [".eslintrc.cjs", "vite.config.ts","next-env.d.ts","*.js","roomCache.ts","route.ts"],
  
}

/** @type {import("eslint").Linter.Config} */
const config = {
  $schema: 'https://json.schemastore.org/eslintrc',
  root: true,
  plugins: ['tailwindcss'],
  extends: ['prettier', 'next/core-web-vitals', 'plugin:tailwindcss/recommended'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
  },
  settings: {
    tailwindcss: {
      callees: ['cn'],
    },
  },
};

module.exports = config;

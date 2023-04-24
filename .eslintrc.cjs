/** @type {import("eslint").Linter.Config} */
const config = {
  $schema: 'https://json.schemastore.org/eslintrc',
  root: true,
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'tailwindcss'],
  extends: [
    'next/core-web-vitals',
    'prettier',
    'plugin:tailwindcss/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksVoidReturn: {
          attributes: true,
        },
      },
    ],
    'tailwindcss/no-custom-classname': 'off',
  },
  settings: {
    tailwindcss: {
      callees: ['cn'],
    },
  },
};

module.exports = config;

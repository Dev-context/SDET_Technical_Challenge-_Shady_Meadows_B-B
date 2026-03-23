import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...playwright.configs['flat/recommended'],
    files: ['src/**/*.{ts,js}'],
    rules: {
      'playwright/no-skipped-test': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
  {
    // Pastas para ignorar
    ignores: [
      '**/node_modules/**',
      '**/test-results/**',
      '**/playwright-report/**',
      '**/blob-report/**',
      '**/playwright/.auth/**',
      '**/playwright/.cache/**',
      '**/dist/**',
      '**/build/**',
      '**/out/**',
      '**/*.log',
      '**/.DS_Store',
      '**/.env',
      '**/.env.',
    ],
  },
);

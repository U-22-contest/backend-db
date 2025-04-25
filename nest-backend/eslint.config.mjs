// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 5,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      // any 型を変数に代入するのを禁止
      '@typescript-eslint/no-unsafe-assignment': 'error',
      // any 型のプロパティにアクセスするのを禁止
      '@typescript-eslint/no-unsafe-member-access': 'error',
      // any() のような関数呼び出しを禁止
      '@typescript-eslint/no-unsafe-call': 'error',
      // 関数の戻り値型を明示
      '@typescript-eslint/no-explicit-any': 'error',
      // await を忘れた Promise を警告
      '@typescript-eslint/no-floating-promises': 'error',
      // any を関数に渡すときに警告
      '@typescript-eslint/no-unsafe-argument': 'error',
      // 関数の戻り値型を明示
      '@typescript-eslint/explicit-function-return-type': 'warn',
      // 未使用変数チェック
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      // type統一
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },
);

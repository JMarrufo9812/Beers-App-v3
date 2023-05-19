/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  rules: {
    // "template-curly-spacing": ["warn", "always"],
    // indent: ["warn", 2],
    // quotes: ["warn", "single"],
    // semi: ["warn", "never"],
    // "space-before-function-paren": ["error", "always"],
    // "space-before-blocks": ["error", "always"],
    // "comma-dangle": ["error", "always-multiline"],
    // "no-trailing-spaces": ["error"],
  },
  overrides: [
    {
      files: ['cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
}

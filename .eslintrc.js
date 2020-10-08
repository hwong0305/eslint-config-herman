module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'html'],
  rules: {
    'react/prop-types': 'off', // Not needed for typescript
    'react/display-name': 'off',
    'no-shadow': 1,
    'no-useless-return': 2,
    'prefer-destructuring': 1,
    'prefer-template': 2,
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 80,
        semi: false
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}

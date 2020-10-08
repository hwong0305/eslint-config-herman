module.exports = {
  env: {
    browser: true,
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
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/prop-type': 'off',
    'react/display-name': 'off',
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

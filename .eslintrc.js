module.exports = {
  env: {
    browser: true,
    es6: true
  },
  // prettier-ignore
  extends: [
    'standard',
    'standard-react',
    'prettier',
    'prettier/standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  // prettier-ignore
  plugins: [
    'react',
    'prettier'
  ]
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': [0],
    'react/forbid-prop-types': [0],
    'import/prefer-default-export': [0],
    'max-len': [0],
    'react/jsx-props-no-spreading': [0],
    'no-plusplus': [0],
    'class-methods-use-this': [0],
    'no-await-in-loop': [0],
    'import/no-unresolved': [0],
  },
};

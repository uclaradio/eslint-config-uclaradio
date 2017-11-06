module.exports = {
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'func-names': ['error', 'as-needed'],
    'react/jsx-filename-extension': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        jsxBracketSameLine: true,
      },
    ],
  },
};

module.exports = {
  extends: [
    'airbnb-base',
    'plugin:unicorn/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible',
    'plugin:sonarjs/recommended',
  ],
  rules: {
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1, maxEOF: 0 }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'cjs-export', next: '*' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: 'cjs-import', next: '*' },
      { blankLine: 'never', prev: 'cjs-import', next: 'cjs-import' },
      { blankLine: 'always', prev: 'expression', next: '*' },
      { blankLine: 'any', prev: 'expression', next: 'expression' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'any', prev: 'block-like', next: 'block-like' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'unicorn/custom-error-definition': 'error',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-unused-properties': 'error',
  },
};

const baseConfig = require('../base');

test('baseConfig', () => {
  expect(baseConfig).toEqual({
    ignorePatterns: [
      'node_modules/',
      'coverage/',
    ],
    extends: [
      'airbnb-base',
      'plugin:unicorn/recommended',
      'plugin:you-dont-need-lodash-underscore/compatible',
      'plugin:sonarjs/recommended',
      'plugin:strict-case/recommended',
    ],
    rules: {
      'no-multiple-empty-lines': [
        'error',
        { max: 1, maxBOF: 1, maxEOF: 0 },
      ],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'cjs-export', next: '*' },
        { blankLine: 'any', prev: 'cjs-export', next: 'cjs-export' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: 'cjs-import', next: '*' },
        { blankLine: 'any', prev: 'cjs-import', next: 'cjs-import' },
        { blankLine: 'any', prev: 'expression', next: '*' },
        { blankLine: 'any', prev: 'expression', next: 'expression' },
        { blankLine: 'any', prev: 'block-like', next: '*' },
        { blankLine: 'any', prev: 'block-like', next: 'block-like' },
        { blankLine: 'always', prev: '*', next: 'function' },
        { blankLine: 'always', prev: 'function', next: '*' },
        { blankLine: 'always', prev: '*', next: 'class' },
        { blankLine: 'always', prev: 'class', next: '*' },
        { blankLine: 'any', prev: '*', next: 'return' },
      ],
      'unicorn/custom-error-definition': 'error',
      'unicorn/no-unsafe-regex': 'error',
      'unicorn/no-unused-properties': 'error',
      'unicorn/no-fn-reference-in-iterator': 'error',
      'unicorn/no-unreadable-array-destructuring': 'off',
      'unicorn/filename-case': [
        'error',
        { cases: { kebabCase: true, camelCase: true, pascalCase: true } },
      ],
      'sonarjs/no-duplicate-string': 'off',
    },
  });
});

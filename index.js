module.exports = {
  extends: './base',
  overrides: [{
    files: ['**/*.{spec,test}.js'],
    extends: [
      './base',
      'plugin:jest/recommended',
      'plugin:jest/style',
    ],
    rules: {
      'global-require': 'off',
      'jest/expect-expect': 'error',
      'jest/no-jasmine-globals': 'error',
      'jest/no-alias-methods': 'error',
      'jest/consistent-test-it': 'error',
      'jest/no-duplicate-hooks': 'error',
      'jest/no-expect-resolves': 'error',
      'jest/no-large-snapshots': 'error',
      'jest/no-test-return-statement': 'error',
      'jest/no-truthy-falsy': 'error',
      'jest/prefer-hooks-on-top': 'error',
      'jest/prefer-spy-on': 'error',
      'jest/prefer-todo': 'error',
      'jest/require-to-throw-message': 'error',
      'jest/valid-title': 'error',
    },
  }],
};

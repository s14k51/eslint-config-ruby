module.exports = {
  extends: [
    'airbnb-base',
    'plugin:logical-padding/error',
    'plugin:unicorn/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible',
    'plugin:sonarjs/recommended',
  ],
  rules: {
    'unicorn/custom-error-definition': 'error',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-unused-properties': 'error',
  },
};

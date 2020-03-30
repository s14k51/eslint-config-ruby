# eslint-config-ruby

Enforces good coding practices. Inspired by [rubystyle.guide](https://rubystyle.guide).

# Installation

```bash
npm i -D eslint eslint-config-ruby
```

or 

```bash
yarn add -D eslint eslint-config-ruby
```

# Usage

In your `.eslintrc`,

```json
{
  "extends": "ruby"
}
```

A config for test files is also available. In `.eslintrc` of your tests directory,

```json
{
  "extends": "ruby/test"
}
```
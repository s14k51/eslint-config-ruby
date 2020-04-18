[![npm version](https://badge.fury.io/js/eslint-config-ruby.svg)](https://badge.fury.io/js/eslint-config-ruby)

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=s14k51/eslint-config-ruby)](https://dependabot.com)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=s14k51_eslint-config-ruby&metric=alert_status)](https://sonarcloud.io/dashboard?id=s14k51_eslint-config-ruby)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=s14k51_eslint-config-ruby&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=s14k51_eslint-config-ruby)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=s14k51_eslint-config-ruby&metric=bugs)](https://sonarcloud.io/dashboard?id=s14k51_eslint-config-ruby)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=s14k51_eslint-config-ruby&metric=security_rating)](https://sonarcloud.io/dashboard?id=s14k51_eslint-config-ruby)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=s14k51_eslint-config-ruby&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=s14k51_eslint-config-ruby)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=s14k51_eslint-config-ruby&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=s14k51_eslint-config-ruby)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=s14k51_eslint-config-ruby&metric=sqale_index)](https://sonarcloud.io/dashboard?id=s14k51_eslint-config-ruby)

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
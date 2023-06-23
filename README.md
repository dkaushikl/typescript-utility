# typescript-utility

Get random character names

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![MIT License][license-badge]][LICENSE]
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
[![Roadmap][roadmap-badge]][roadmap]

## The problem

You're writing tests and need to come up with the name of your user stub. Why waste
time hard-coding `'John Doe'` again when you could use `'Count Dooku'` or
`'Qui-Gon Jinn'`? Using characters makes your tests much more interesting.

## This solution

This module has ~100 character names and exposes an API for you to get a
random one every time you call it.

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and should
be installed as one of your project's dependencies:

```
npm install --save typescript-utility
```

Alternatively you can get the [UMD][umd] build which is also published to the npm
registry and is therefore available via [unpkg.com][unpkg]:

- [https://unpkg.com/typescript-utility@1.0.5/dist/index.umd.js][unpkg-link]
- [https://unpkg.com/typescript-utility@1.0.5/dist/index.umd.min.js][unpkg-min-link]

The UMD build exposes the module as a global called `typescriptUtility` or as an unnamed
module for AMD/CommonJS (require it by its file path)

## Usage

```javascript
const typescriptUtility = require('typescript-utility') // CommonJS
console.log(typescriptUtility.random()) // Han Solo
console.log(typescriptUtility.random()) // Kit Fisto
// you can also get the full array on `typescriptUtility.all`
```

## LICENSE

MIT

[build-badge]: https://img.shields.io/github/actions/workflow/status/dkaushikl/typescript-utility/build.yml.svg?style=flat-square
[build]: https://github.com/dkaushikl/typescript-utility/actions
[coverage-badge]: https://img.shields.io/codecov/c/github/dkaushikl/typescript-utility.svg?style=flat-square
[coverage]: https://codecov.io/github/dkaushikl/typescript-utility
[version-badge]: https://img.shields.io/npm/v/typescript-utility.svg?style=flat-square
[package]: https://www.npmjs.com/package/typescript-utility
[license-badge]: https://img.shields.io/npm/l/typescript-utility.svg?style=flat-square
[license]: https://github.com/dkaushikl/typescript-utility/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/dkaushikl/typescript-utility/blob/master/CODE_OF_CONDUCT.md
[roadmap-badge]: https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square
[roadmap]: https://github.com/dkaushikl/typescript-utility/blob/master/other/ROADMAP.md
[umd]: https://github.com/umdjs/umd
[unpkg]: https://unpkg.com
[unpkg-link]: https://unpkg.com/typescript-utility@1.0.5/dist/index.umd.js
[unpkg-min-link]: https://unpkg.com/typescript-utility@1.0.5/dist/index.umd.min.js

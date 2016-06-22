
# find-index

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Find the index of an item in an array, given a predicate

## Installation

    $ npm install @f/find-index

## Usage

```js
var findIndex = require('@f/find-index')

findIndex([1, 2, 3], n => n === 3) === 2
```

## API

### findIndex(arr, fn, fromIndex)

- `arr` - Array to search
- `fn` - Predicate function that is called on each item. If it returns true, the index of that item is returned from `findIndex`.
- `fromIndex` - Optional. Defaults to 0. The starting place in the array to search from.

**Returns:** The index of the first item that `fn` returns true for. If no such item is found, returns -1.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/find-index.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/find-index
[git-image]: https://img.shields.io/github/tag/micro-js/find-index.svg?style=flat-square
[git-url]: https://github.com/micro-js/find-index
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/find-index.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/find-index

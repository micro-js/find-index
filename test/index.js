/**
 * Imports
 */

var findIndex = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(findIndex([1, 2, 3], function (n) { return n === 3}), 2)
  t.equal(findIndex([1, 2, 3, 4, 4, 3], function (n) { return n === 3}, 3), 5)

  t.end()
})
